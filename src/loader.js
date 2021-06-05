import './styles/loader.css'

export default function hideLoader() {
    const load = document.querySelector('.loader')
    const img = document.querySelector('#picture')

    img.onload = () => {
        load.style.display = 'none'
    }
}