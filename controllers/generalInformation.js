// generalInformation.js
const infoCreate = require('../services/generalInformation/infoCreate')
const infoUpdate = require('../services/generalInformation/infoUpdate')
const infoFetch = require('../services/generalInformation/infoFetch')
const infoDelete = require('../services/generalInformation/infoDelete')

const infoCreateController = async (req, res) => {
    const { telNo, email, singleAdvertisement, address, socalLinks, aboutUs, dealsOfMonth} = req.body
    if (!telNo || !email || !singleAdvertisement || !address || !socalLinks || !aboutUs || !dealsOfMonth) {
        return res.status(400).json({message: 'All fields are required'})
    }
    try {
        const info = await infoCreate(telNo, email, singleAdvertisement, address, socalLinks, aboutUs, dealsOfMonth)
        res.status(201).json(info)
    } catch (error) {
        res.status(500).json({message: 'Internal server error'})
    }
}

const infoUpdateController = async (req, res) => {
    const { telNo, email, singleAdvertisement, address, socalLinks, aboutUs, dealsOfMonth} = req.body
    if (!telNo || !email || !singleAdvertisement || !address || !socalLinks || !aboutUs || !dealsOfMonth) {
        return res.status(400).json({message: 'All fields are required'})
    }
    try {
        const info = await infoUpdate(telNo, email, singleAdvertisement, address, socalLinks, aboutUs, dealsOfMonth)
        res.status(200).json(info)
    } catch (error) {
        res.status(500).json({message: 'Internal server error'})
    }
}

const infoFetchController = async (req, res) => {
    try {
        const info = await infoFetch()
        res.status(200).json(info)
    } catch (error) {
        res.status(500).json({message: 'Internal server error'})
    }
}

const infoDeleteController = async (req, res) => {
    try {
        const info = await infoDelete()
        res.status(200).json(info)
    } catch (error) {
        res.status(500).json({message: 'Internal server error'})
    }
}

module.exports = {
    infoCreateController,
    infoUpdateController,
    infoFetchController,
    infoDeleteController
}