const {Schema, model, Types: { ObjectId }} = require('mongoose');

const postSchema = new Schema({
    playerName : { type: ObjectId, ref: 'Player', required: true }
    , postContent  : { type: String, minlength: [5, 'Content must be at least 5 characters long'], maxlength: [100, 'Content must be max least 100 characters long'] }
    , date  : { type: String, required: true }
    , time  : { type: String,required: true }
    , author  : { type: ObjectId, ref: 'User', required: true }
});

const Post = model('Post', postSchema);

module.exports = Post;