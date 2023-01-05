const CatchError = (fuct) => async (req, res, next) => {
    try{
        await fuct(req, res);
    }
    catch(error){
        next(error);
    }
}

module.exports = CatchError;