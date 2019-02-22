import ImageService from "./image-service.js";

const _is = new ImageService()

function drawImage() {
    let img = _is.Image
    document.body.style.backgroundImage = `url(${img})`
}
export default class ImageController {

    constructor() {
        _is.addSubscriber('images', drawImage)
        _is.getImage()
    }
}

