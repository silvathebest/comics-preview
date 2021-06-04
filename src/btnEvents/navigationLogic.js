import createPictureId from "../utils/createPictureId"
import { config } from "../config/config"

const nextBtn = document.querySelector('#nextBtn')
const randomBtn = document.querySelector('#randomBtn')
const prevBtn = document.querySelector('#prevBtn')
const toFirstBtn = document.querySelector('#toFirstBtn')
const toLastBtn = document.querySelector('#toLastBtn')

const navigationHadler = (newPictureId) => {
    const { idPrefixIndex, pictureId, currentLocation } = createPictureId()

    if (newPictureId > config.maxPictureId || newPictureId < config.minPictureId) return

    idPrefixIndex ?
        window.location.href = currentLocation.replace(config.idPrefix + pictureId, config.idPrefix + newPictureId) :
        window.location.href = `${currentLocation}${config.idPrefix}${newPictureId}`
}

export default function navigationLogic() {

    toFirstBtn.addEventListener('click', () => navigationHadler(config.minPictureId))

    prevBtn.addEventListener('click', () => {
        let { pictureId } = createPictureId()

        if (!pictureId) pictureId = config.defaultPictureId

        navigationHadler(pictureId - 1)
    })


    randomBtn.addEventListener('click', () => {
        const randomPictureId = parseInt(Math.random() * (config.maxPictureId - config.minPictureId) + config.minPictureId)

        navigationHadler(randomPictureId)
    })

    nextBtn.addEventListener('click', () => {
        let { pictureId } = createPictureId()

        if (!pictureId) pictureId = config.defaultPictureId

        navigationHadler(pictureId + 1)
    })

    toLastBtn.addEventListener('click', () => navigationHadler(config.maxPictureId))

}