import getComics from "./api/getComics.js";

getComics(1235).then(item => console.log(item))

const nextBtn = document.querySelector('#next')
nextBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const index = window.location.href.indexOf('?') + 1
    const parametr = Number(window.location.href.substring(index, window.location.href.length)) + 1
    window.location.href = window.location.href.replace(parametr - 1, parametr)
    getComics(parametr).then(item => {
        document.querySelector('#picture').src = item.img
    })
})

window.onload = () => {
    const index = window.location.href.indexOf('?') + 1
    let parametr = window.location.href.substring(index, window.location.href.length)
    if (!index) parametr = 1234
    getComics(parametr).then(item => {
        document.querySelector('#picture').src = item.img
    })
}