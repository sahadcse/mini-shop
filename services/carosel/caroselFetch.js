const Carosel = require('../../models/carosel.model');

const caroselFetch = async () => {
    try{
        const carosels = await Carosel.find();
        return carosels;
    } catch(err){
        console.error('caroselFetch:', err);
        throw new error('Internal server error', 500);
    }
}

module.exports = caroselFetch;