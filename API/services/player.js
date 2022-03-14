const Post = require('../models/Post');
const User = require('../models/User');
const Player = require('../models/Player');


async function getAllPlayers(){
    return Player.find({});
}


module.exports = {
    getAllPlayers
}