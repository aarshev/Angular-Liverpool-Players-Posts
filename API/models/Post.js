const {Schema, model, Types: { ObjectId }} = require('mongoose');

const postSchema = new Schema({
    playerName : { type: String, required: true }
    , postContent  : { type: String, minlength: [5, 'Content must be at least 5 characters long'], maxlength: [100, 'Content must be max least 100 characters long'] }
    , author  : { type: ObjectId, ref: 'User', required: true }
});

const Post = model('Post', postSchema);

module.exports = Post;