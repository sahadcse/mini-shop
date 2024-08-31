const Carosel = require('../../models/carosel.model')
const imageUpload = require('../imageUpload')
const error = require('../../utils/error')

const caroselUpdate = async (id, image, imageAlt, imageTitle, imageText, imageTag, imageBtnLink) => {
    try{
        const imageUrl = await imageUpload(image);
        const carosel = await Carosel.findById(id);
        carosel.imageUrl = imageUrl;
        carosel.imageAlt = imageAlt;
        carosel.imageTitle = imageTitle;
        carosel.imageText = imageText;
        carosel.imageTag = imageTag;
        carosel.imageBtnLink = imageBtnLink;
        await carosel.save();
        return carosel;
    }
    catch(err){
        console.error('caroselUpdate:', err);
        throw new error('Internal server error', 500);
    }
}

module.exports = caroselUpdate;