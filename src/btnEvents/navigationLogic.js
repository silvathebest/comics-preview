import createPictureId from "../utils/createPictureId"
import { config } from "../config/config"
import '../styles/navigationButtons.css'

const navigationHadler = (newPictureId) => {
    const { idPrefixIndex, pictureId, currentLocation } = createPictureId()

    if (newPictureId > config.maxPictureId || newPictureId < config.minPictureId) return

    idPrefixIndex ?
        window.location.href = currentLocation.replace(config.idPrefix + pictureId, config.idPrefix + newPictureId) :
        window.location.href = `${currentLocation}${config.idPrefix}${newPictureId}`
}

const mainButtonHandler = (btnValue) => {
    let { pictureId } = createPictureId()

    if (!pictureId) pictureId = config.defaultPictureId

    navigationHadler(pictureId + btnValue)
}

export default function navigationLogic() {
    document.querySelector('#toFirstBtn').addEventListener('click', () => navigationHadler(config.minPictureId))

    document.querySelector('#prevBtn').addEventListener('click', () => mainButtonHandler(-1))

    document.querySelector('#randomBtn').addEventListener('click', () =>
        navigationHadler(~~(Math.random() * (config.maxPictureId - config.minPictureId) + config.minPictureId))
    )

    document.querySelector('#nextBtn').addEventListener('click', () => mainButtonHandler(1))

    document.querySelector('#toLastBtn').addEventListener('click', () => navigationHadler(config.maxPictureId))
}