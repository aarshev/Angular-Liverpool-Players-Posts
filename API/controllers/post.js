const { Router } = require('express');
const { getAllPosts, createPost, getPostById, getAllPostsForPlayer, updatePost, deletePost, getAllPostsForUser } = require('../services/post');
const utils = require('../utils');


const router = Router();

router.get('/profile/:id', async (req, res, next) => {
    const userId = req.params.id
    const posts = await getAllPostsForUser(userId);
    try{
        res.status(200).json(posts)
    }catch(err){
        next(err);
    }
});


router.get('/posts', async (req, res, next) => {
    const posts = await getAllPosts();
    try{
        res.status(200).json(posts)
    }catch(err){
        next(err);
    }
});

router.get('/posts/:id', async (req, res, next) => {
    const playerId = req.params.id
    const posts = await getAllPostsForPlayer(playerId);
    try{
        res.status(200).json(posts)
    }catch(err){
        next(err);
    }
});


router.post('/create', utils.auth() , async (req, res, next) => {
   const { _id: userId } = req.user;
    const post = {
        playerName : req.body.playerName
        , postContent  : req.body.postText
        , author  : userId
    }
    try{
        const postDone = await createPost(post);
        res.status(200).json(postDone);
    }catch(err){
        next(err)
    }
});

router.get('/edit/:id', async (req, res, next) => {
    const id = req.params.id;
    const post = await getPostById(id);
    try{
        res.status(200).json(post)
    }catch(err){
        next(err);
    }
});

router.post('/edit/:id' , async (req, res, next) => {
    const id = req.params.id;
    const existing = await getPostById(id);

    const post = {
        playerName : req.body.playerName
        , postContent  : req.body.postContent
    }
    try{
        const updatedPost = await updatePost(id, post);
        res.status(200).json(updatedPost);
    }catch(err){
       next(err);
    }
});


router.delete('/delete/:id', async(req, res, next) => {
    const id= req.params.id;
    try{
        const deletedPost = await deletePost(id);
        res.status(200).json(deletedPost);
    }catch(err){
       next(err)
    }
});


module.exports = router;