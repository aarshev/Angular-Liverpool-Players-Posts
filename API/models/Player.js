const {Schema, model, Types: { ObjectId }} = require('mongoose');

const URL_PATTERN = /^http{1}s?:\/\/(.+)/;

const playerSchema = new Schema({
    playerName : { type: String, minlength: [4, 'Player Name must be at least 4 characters long']}
    , nationality  : { type: String, minlength: [4, 'Nationality must be at least 4 characters long'] }
    , position  : { type: String, required: true, enum: ['Goalkeeper', 'Defender', 'Midfielder', 'Attacker'] }
    , playerImage  :
        { type: String, validate: {
            validator(value){
                return URL_PATTERN.test(value);
            }, message: 'Image must be a valid URL'
        }
    }
    , votes : { type: [ObjectId], ref: 'User', default: [] }
});

const Player = model('Player', playerSchema);

module.exports = Player;