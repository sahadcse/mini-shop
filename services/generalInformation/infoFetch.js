const generalInformation = require('../../models/generalInformation.model')

const infoFetch = async () => {

    try {
        const info = await generalInformation.find()
        return info
    } catch (error) {
        console.log(error)
    }
}
    

module.exports = infoFetch