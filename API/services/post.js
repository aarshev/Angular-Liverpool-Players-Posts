const Post = require('../models/Post');
const User = require('../models/User');
const Player = require('../models/Player');


async function getAllPosts(){
    return Post.find({});
}

async function getPostById(id){
    return Post.findById(id);
}


async function createPost(post){
    const result = new Post(post);
    await result.save();
    
    const user = await User.findById(result.author)
    user.posts.push(result._id);

    await user.save();

    const player = await Player.findById(result.playerName);
    player.posts.push(result._id);

    await player.save();


    return result;
}

async function updatePost(id, post){
    const existing = await Post.findById(id);


    existing.playerName = psot.playerName;
    existing.postContent  = post.postContent;
    existing.date  = post.date;
    existing.time  = post.time;

    await existing.save();
}

async function deletePost(id){
    return Post.findByIdAndDelete(id);
}




module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost
}