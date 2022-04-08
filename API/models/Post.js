const {Schema, model, Types: { ObjectId }} = require('mongoose');

const postSchema = new Schema({
    playerName : { type: String, required: true }
    , postContent  : { type: String, minlength: [5, 'Content must be at least 5 characters long']}
    , author  : { type: ObjectId, ref: 'User', required: true }
    , likes : { type: [ObjectId], ref: 'User', default: [] }
}, { timestamps: { createdAt: 'created_at' }});

const Post = model('Post', postSchema);

module.exports = Post;