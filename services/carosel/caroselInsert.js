const Carosel = require('../../models/carosel.model');
const imageUpload = require('../imageUpload');
const error = require('../../utils/error');

const caroselInsert = async (image, imageAlt, imageTitle, imageText, imageTag, imageBtnLink) => {
    try{
        const imageUrl = await imageUpload(image);
        const carosel = new Carosel({
            imageUrl,
            imageAlt,
            imageTitle,
            imageText,
            imageTag,
            imageBtnLink
        });
        await carosel.save();
        return carosel;
    } catch(err){
        console.error('caroselInsert:', err);
        throw new error('Internal server error', 500);
    }
}



module.exports = caroselInsert;