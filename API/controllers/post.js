const { Router } = require('express');
const { getAllPosts, createPost, getPostById, updatePost, deletePost } = require('../services/post');
const { auth } = require('../utils');


const router = Router();

router.get('/posts', async (req, res) => {
    const posts = await getAllPosts();
    try{
        res.status(200).json(posts)
    }catch(err){
        next(err);
    }
});

router.post('/create', auth() , async (req, res, next) => {
   const { _id: userId } = req.user; //todo get id after you make the jwt
    const post = {
        playerName : req.body.playerName
        , postContent  : req.body.postContent
        , author  : userId
    }
    console.log(post);
    try{
        const postDone = await createPost(post);
        res.status(200).json(postDone);
    }catch(err){
        next(err)
    }
});
//todo add guards to delete update and create
router.post('/edit/:id' , async (req, res, next) => {
    const id = req.params.id;
    const existing = await getPostById(id);

    const post = {
        playerName : req.body.playerName
        , postContent  : req.body.postContent
    }
    
    try{
        const updatePost = await updatePost(id, post);
        res.status(200).json(updatedPost);
    }catch(err){
       next(err);
    }
});


router.post('/delete/:id', async(req, res, next) => {
    const id= req.params.id;
    const existing = await getPostById(id);
    
    try{
        const deletePost = await deletePost(id);
        res.status(200).json(deletePost);
    }catch(err){
       next(err)
    }
});


module.exports = router;