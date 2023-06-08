const router = require('express').Router();
const {resolve} = require('path');
const {getFlights} = require('../../controller/flight')

router.post('/', async (req,res)=>{
    try{
    console.log("reached router");
    const data = req.body
    const flights = await getFlights(data);
    console.log(flights);
    res.status(200).json(flights);
    }
    catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;