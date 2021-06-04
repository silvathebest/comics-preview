export default function createPictureId() {
    const currentLocation = window.location.href
    const idPrefixIndex = currentLocation.indexOf('?') + 1
    const pictureId = Number(currentLocation.substring(idPrefixIndex, currentLocation.length))

    return { currentLocation, idPrefixIndex, pictureId }
}