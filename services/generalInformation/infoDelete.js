const GeneralInformation = require('../../models/generalInformation.model')
const infoDelete = async () => {
    try {
        const info = await GeneralInformation.deleteOne()
        if (!info) {
            throw new Error('No info found')
        }
        return info
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = infoDelete