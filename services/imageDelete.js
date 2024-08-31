const cloudinary = require('../config/cloudinary');

const imageDelete = async (imgUrl) => {
    try {
        const publicId = imgUrl.split('/').pop().split('.')[0];
        await cloudinary.uploader.destroy(publicId);
        return;
    } catch (error) {
        console.error("Error in imageDelete", error);
        throw new Error('Image deletion failed');
    }
}

module.exports = imageDelete;