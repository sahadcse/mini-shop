const categoryCreate = require('../services/category/categoryCreate')
const categoryList = require('../services/category/categoryList')
const categoryUpdate = require('../services/category/categoryUpdate')
const categoryDelete = require('../services/category/categoryDelete')
const categoryGet = require('../services/category/categoryGet')

const categoryCreateController = async (req, res) => {
    const { name, description } = req.body
    // console.log('categoryCreateController:', req)
    try {
        if (!name || !description) {
            return res.status(400).json({ message: "name and description are required" })
        }
        const category = await categoryCreate(name, description)
        res.status(201).json(category)
    } catch (error) {
        console.error('categoryCreateController:', error)
        res.status(500).json({ message: error.message })
    }
}

const categoryListController = async (req, res) => {
    try {
        const categories = await categoryList()
        res.json(categories)
    } catch (error) {
        console.error('categoryListController:', error)
        res.status(500).json({ message: error.message })
    }
}

const categoryUpdateController = async (req, res) => {
    const { id } = req.params
    const { name, description } = req.body
    if (!name || !description) {
        return res.status(400).json({ message: "name and description are required" })
    }
    try {
        const category = await categoryUpdate(id, name, description)
        res.json(category)
    } catch (error) {
        console.error('categoryUpdateController:', error)
        res.status(500).json({ message: error.message })
    }
}

const categoryDeleteController = async (req, res) => {
    const { id } = req.params
    try {
        const category = await categoryDelete(id)
        res.json(category)
    } catch (error) {
        console.error('categoryDeleteController:', error)
        res.status(500).json({ message: error.message })
    }
}

const categoryGetController = async (req, res) => {
    const { id } = req.params
    try {
        const category = await categoryGet(id)
        res.json(category)
    } catch (error) {
        console.error('categoryGetController:', error)
        res.status(500).json({ message: error.message })
    }
}

module.exports = { 
    categoryCreateController, 
    categoryListController, 
    categoryUpdateController, 
    categoryDeleteController, 
    categoryGetController 
}
