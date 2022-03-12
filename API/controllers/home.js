const { Router } = require('express');
const Player = require('../models/Player');


const router = Router();


router.get('/', async (req, res) => {
    res.status(200).json({ message: `It's working!` });
});



module.exports = router;