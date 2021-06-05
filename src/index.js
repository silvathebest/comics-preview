import createPictureId from "./utils/createPictureId"
import rerenederView from "./utils/rerenderView"
import navigationLogic from "./btnEvents/navigationLogic"
import hideLoader from "./loader"
import share from "./btnEvents/share";
import { config } from "./config/config"
import './styles/comicsView.css'

window.onload = () => {
    hideLoader()
    let { idPrefixIndex, pictureId } = createPictureId()
    if (!idPrefixIndex) pictureId = config.defaultPictureId
    rerenederView(pictureId)
    share()
    navigationLogic()
}