const Carosel = require('../models/carosel.model');
const caroselInsert = require('../services/carosel/caroselInsert');
const caroselFetch = require('../services/carosel/caroselFetch');
const caroselUpdate = require('../services/carosel/caroselUpdate');
const caroselDelete = require('../services/carosel/caroselDelete');

const caroselCreateController = async (req, res) => {
    const { imageAlt, imageTitle, imageText, imageTag, imageBtnLink  } = req.body;
    const image = req.file;
    if(!image || !imageTitle || !imageText || !imageTag || !imageBtnLink){
        return res.status(400).json({message: 'All fields are required'});
    }
    try{
        const carosel = await caroselInsert(image, imageAlt, imageTitle, imageText, imageTag, imageBtnLink);
        res.status(201).json({message: 'Carosel created successfully', carosel});
    } catch(err){
        console.error('caroselCreateController:', err);
        res.status(500).json({message: 'Internal server error'});
    }
}

const caroselFetchController = async (req, res) => {
    try{
        const carosels = await caroselFetch();
        res.status(200).json({carosels});
    } catch(err){
        console.error('caroselFetchController:', err);
        res.status(500).json({message: 'Internal server error'});
    }
}

const caroselUpdateController = async (req, res) => {
    const { id } = req.params;
    const { imageAlt, imageTitle, imageText, imageTag, imageBtnLink } = req.body;
    const image = req.file;
    if(!imageAlt || !imageTitle || !imageText || !imageTag || !imageBtnLink){
        return res.status(400).json({message: 'All fields are required'});
    }
    const findId = await Carosel.findById(id);
    if(!findId){
        return res.status(404).json({message: 'Carosel not found'});
    }
    try{
        const updateCarosel = await caroselUpdate(id, image, imageAlt, imageTitle, imageText, imageTag, imageBtnLink);
        res.status(200).json({message: 'Carosel updated successfully', updateCarosel});
    } catch(err){
        console.error('caroselUpdateController:', err);
        res.status(500).json({message: 'Internal server error'});
    }
}

const caroselDeleteController = async (req, res) => {
    const { id } = req.params;
    const findId = await Carosel.findById(id);
    if(!findId){
        return res.status(404).json({message: 'Carosel not found'});
    }
    try{
        await caroselDelete(id);
        res.status(200).json({message: 'Carosel deleted successfully'});
    } catch(err){
        console.error('caroselDeleteController:', err);
        res.status(500).json({message: 'Internal server error'});
    }
}

module.exports = {
    caroselCreateController,
    caroselFetchController,
    caroselUpdateController,
    caroselDeleteController
}