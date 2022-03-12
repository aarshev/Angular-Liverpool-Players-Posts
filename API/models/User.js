const {Schema, model, Types: { ObjectId }} = require('mongoose');

const EMAIL_PATTERN = /^([a-zA-Z]+)@([a-zA-Z]+)\.([a-zA-Z]+)$/

const userSchema = new Schema({
    email: {
        type: String, required: [true, 'Email is required'], validate:{
            validator(value){
                return EMAIL_PATTERN.test(value);
            },
            message: 'Email must be valid  may contain only english letters'
        }
    }, 
    hashedPassword : { type: String, required: true},
    posts : { type: [ObjectId], ref: 'Post', default: []},
});

//for unique email
userSchema.index({ email: 1 }, {
    unique: true,
    collation: {
        locale: 'en',
        strength: 2
    }
});

const User = model('User', userSchema);

module.exports = User;

