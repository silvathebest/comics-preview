import createPictureId from "./utils/createPictureId"
import rerenederView from "./utils/rerenderView"
import navigationLogic from "./btnEvents/navigationLogic";
import { config } from "./config/config"
import './styles/comics.css';

window.onload = () => {
    let { idPrefixIndex, pictureId } = createPictureId()
    if (!idPrefixIndex) pictureId = config.defaultPictureId
    rerenederView(pictureId)
    navigationLogic()
}