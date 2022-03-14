const { Router } = require('express');
const { register, login } = require('../services/user');

const router = Router();


router.post('/register' , async (req, res, next) => {
    try{
        if(req.body.password < 4){
            throw new Error('Password must be at least 4 symbols');
        }

        if(req.body.password.trim() == ''){
            throw new Error('Password is required');
        }
        if(req.body.password != req.body.repass){
            throw new Error('Passwords dont match');
        }
        const user = await register(req.body.email, req.body.password, res);
        //todo add JWT session
        res.status(200).send(user);
    }catch(err){
        if (err.name === 'MongoError' && err.code === 11000) {
            let field = err.message.split("index: ")[1];
            field = field.split(" dup key")[0];
            field = field.substring(0, field.lastIndexOf("_"));

            res.status(409)
                .send({ message: `This ${field} is already registered!` });
            return;
        }
        next(err);
    }
});


router.post('/login' , async (req, res) => {
    try{
        const user = await login(req.body.email, req.body.password, res);
        //todo add JWT session
        res.status(200).send(user);
    }catch(err){
        next(err);
    }
});

router.post('/logout', async (req, res) => {
    //todo add logout logic
});



module.exports = router;