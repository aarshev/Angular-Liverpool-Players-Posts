const Post = require('../models/Post');
const User = require('../models/User');
const Player = require('../models/Player');


async function getAllPosts(){
    return await Post.find({}).sort({"created_at": -1});
}

async function getPostById(id){
    return Post.findById(id);
}

async function getAllPostsForUser(userId){
    const allPosts = await getAllPosts();
    const posts = [];
    for (let post of allPosts){
        if(post.author == userId){
            posts.push(post)
        }
    }
    return posts;
}

async function getAllPostsForPlayer(playerId){
    const player = await Player.findById(playerId);
    const posts = [];
    for(let postId of player.posts){
        posts.push(await getPostById(postId))
    }
    return posts;
}

async function createPost(post){
    const result = new Post(post);
    await result.save();
    
    const user = await User.findById(result.author)
    user.posts.push(result._id);

    await user.save();

    const player = await Player.findOne({playerName: result.playerName});
    player.posts.push(result._id);

    await player.save();


    return result;
}

async function updatePost(id, post){
    const existing = await Post.findById(id);


    existing.playerName = post.playerName;
    existing.postContent  = post.postContent;

    await existing.save();
}

async function deletePost(id){
    const post = await getPostById(id);
    const playerName = post.playerName;

    const player = await Player.findOne({playerName: playerName});
    for(let i = 0; i < player.posts.length; i++){
        if(player.posts[i] == id){
            player.posts.splice(i, 1);
            await player.save();
            break;
        }
    }

   return Post.findByIdAndDelete(id);
}

async function likePost(postId, userId){
    const post = await getPostById(postId);
    post.likes.push(userId);

    await post.save();
    return post;
}



module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost,
    getAllPostsForPlayer,
    getAllPostsForUser,
    likePost
}