const {Schema, model, Types: { ObjectId }} = require('mongoose');

const URL_PATTERN = /^http{1}s?:\/\/(.+)/;

const playerSchema = new Schema({
    playerName : { type: String, minlength: [4, 'Player Name must be at least 4 characters long']}
    , shirtNumber  : { type: Number, required:true }
    , position  : { type: String, required: true, enum: ['Goalkeeper', 'Defender', 'Midfielder', 'Attacker'] }
    , playerImage  :{ type: String}
    , posts : { type: [ObjectId], ref: 'Post', default: []}
});

const Player = model('Player', playerSchema);

module.exports = Player;


