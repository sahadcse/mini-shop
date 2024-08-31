const generalInformation = require('../../models/generalInformation.model')

const infoCreate = async (telNo, email, singleAdvertisement, address, socalLinks, aboutUs, dealsOfMonth) => {
    const {name, link} = socalLinks
    const {product, discount, timeLimit} = dealsOfMonth
    try {
        const info = new generalInformation({
            telNo,
            email,
            singleAdvertisement,
            address,
            socalLinks: {name, link},
            aboutUs,
            dealsOfMonth: {product, discount, timeLimit}
        })
        await info.save()
        return info
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = infoCreate