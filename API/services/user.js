const User = require('../models/User');
const { compare, hash} = require('bcrypt');


async function register(email, password, res){
    const existing = await getUserByEmail(email);

    if(existing){
        res.status(401)
                    .send({ message: 'Email is existing' });
                return
    }

    const hashedPassword = await hash(password, 10);

    const user = new User({
        email,
        hashedPassword
    });
    await user.save();
    return user;
}


async function login(email, password, res){
    const user = await getUserByEmail(email);

    if(!user){
        res.status(401)
                    .send({ message: 'Wrong email or password' });
                return
    }
    const hasMatch = await compare(password, user.hashedPassword);
    if(!hasMatch){
        res.status(401)
                    .send({ message: 'Wrong email or password' });
                return
    }
    
    return user;
}


async function getUserByEmail(email){
    const user = await User.findOne({email: new RegExp(`^${email}$`, 'i')});

    return user;
}

module.exports = {
    register,
    login
}