const { Router } = require('express');
const Player = require('../models/Player');
const { getAllPlayers } = requier('../services/player')
 

const router = Router();


router.get('/', async (req, res) => {
    const players = await getAllPlayers;
    try{
        res.status(200).json(players)
    }catch(err){
        next(err);
    }
});



module.exports = router;