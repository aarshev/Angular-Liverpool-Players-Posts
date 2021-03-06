const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 3000,
        dbURL: 'mongodb://localhost:27017/liverpoolPlayersPosts',
        origin: ['http://localhost:5555', 'http://localhost:4200']
    }
};

module.exports = config[env];
