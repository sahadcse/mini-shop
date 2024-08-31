const GeneralInformation = require('../../models/generalInformation.model')
const infoUpdate = async (telNo, email, singleAdvertisement, address, socalLinks, aboutUs, dealsOfMonth) => {
    const {name, link} = socalLinks
    const {product, discount, timeLimit} = dealsOfMonth
    try {
        const info = await GeneralInformation.findOne()
        if (!info) {
            throw new Error('No info found')
        }
        telNo && (info.telNo = telNo)
        email && (info.email = email)
        singleAdvertisement && (info.singleAdvertisement = singleAdvertisement)
        address && (info.address = address)
        
        name && info.socalLinks.find(social => social.name === name && (social.link = link))
        aboutUs && (info.aboutUs = aboutUs)
        product && (info.dealsOfMonth.product = product)
        discount && (info.dealsOfMonth.discount = discount)
        timeLimit && (info.dealsOfMonth.timeLimit = timeLimit)


        await info.save()
        return info
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = infoUpdate