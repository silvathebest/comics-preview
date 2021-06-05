import './styles/loader.css'

export default function hideLoader() {
    const load = document.querySelector('.loader')
    const comicsContaier = document.querySelector('.comics-content_wrapper')
    const img = document.querySelector('#picture')

    img.onload = () => {
        load.style.display = 'none'
        comicsContaier.style.opacity = 1
    }
}