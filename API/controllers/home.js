const { Router } = require('express');
const { getAllPlayers } = require('../services/player')
 

const router = Router();


router.get('/players', async (req, res) => {
    const players = await getAllPlayers();
    try{
        res.status(200).json(players)
    }catch(err){
        next(err);
    }
});



module.exports = router;