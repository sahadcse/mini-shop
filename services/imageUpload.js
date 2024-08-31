const cloudinary = require('../config/cloudinary');
const fs = require('fs');

const imageUpload = async (img) => {
    try {
        const imgUPLD = await new Promise((resolve, reject) => {
            cloudinary.uploader.upload(img.path, {resource_type: 'image'}, (error, result) => {
                if(error){
                    return reject( new Error('Image upload failed'));
                }
                resolve(result);
            })
        })
        if(img && fs.existsSync(img.path)){
            fs.unlinkSync(img.path);
        }
        return imgUPLD.secure_url;
    } catch (error) {
        console.error("Error in imageUpload", error);
        throw error('Image upload failed', 500);
    }
}

module.exports = imageUpload;