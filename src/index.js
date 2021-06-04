import getComics from "./api/getComics.js"
import './styles/comics.css';

const defaultPictureId = 1234
const maxPictureId = 2471
const minPictureId = 1
const nextBtn = document.querySelector('#nextBtn')
const randomBtn = document.querySelector('#randomBtn')
const prevBtn = document.querySelector('#prevBtn')

prevBtn.addEventListener('click', () => navigationHadler(-1))

randomBtn.addEventListener('click', () => {
    const { index, pictureId, currentLocation } = createPictureId()
    const randomPictureId = parseInt(Math.random() * (maxPictureId - minPictureId) + minPictureId)

    index ? window.location.href = currentLocation.replace(pictureId, randomPictureId) :
        window.location.href = `${currentLocation}?${randomPictureId}`

    rerenederView()
})

nextBtn.addEventListener('click', () => navigationHadler(1))

const navigationHadler = (button) => {
    const { index, pictureId, currentLocation } = createPictureId()

    index ? window.location.href = currentLocation.replace(pictureId, pictureId + button) :
        window.location.href = `${currentLocation}?${defaultPictureId + button}`

    rerenederView(pictureId)
}

const createPictureId = () => {
    const currentLocation = window.location.href
    const index = currentLocation.indexOf('?') + 1
    const pictureId = Number(currentLocation.substring(index, currentLocation.length))

    return { currentLocation, index, pictureId }
}

window.onload = () => {
    let { index, pictureId } = createPictureId()
    if (!index) pictureId = 1234
    rerenederView(pictureId)
}

const rerenederView = async(comicsId) => {
    const comics = await getComics(comicsId)

    console.log(comics)
    document.querySelector('#title').innerHTML = comics.title
    document.querySelector('#picture').src = comics.img
    document.querySelector('#date').innerHTML = new Date(`${comics.month}.${comics.day}.${comics.year}`).toLocaleDateString()
    document.querySelector('#transcript').innerHTML = comics.transcript
}