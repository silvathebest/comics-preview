import getComics from "../api/getComics"

export default async function rerenederView(comicsId = null) {
    const comics = await getComics(comicsId)

    document.querySelector('#title').innerHTML = comics.title
    document.querySelector('#picture').src = comics.img
    document.querySelector('#date').innerHTML = 'Creation date: ' +
        new Date(`${comics.month}.${comics.day}.${comics.year}`).toLocaleDateString()
    document.querySelector('#transcript').innerHTML = comics.transcript
}