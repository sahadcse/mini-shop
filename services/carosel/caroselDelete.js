const Carosel = require('../../models/carosel.model');
const error = require('../../utils/error');

const caroselDelete = async (id) => {
    try{
        await Carosel.findByIdAndDelete(id);
    } catch(err){
        console.error('caroselDelete:', err);
        throw new error('Internal server error', 500);
    }
}

module.exports = caroselDelete;