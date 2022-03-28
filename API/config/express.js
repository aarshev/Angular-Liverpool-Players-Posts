const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const cookieSecret = process.env.COOKIESECRET || 'AArshev';
const cors = require('cors');
const config = require('./config');


module.exports = (app) => {
    app.use(express.json());
    app.use(cookieParser(cookieSecret));
    app.use(cors({
        origin: config.origin,
        credentials: true
      }));
    app.use(express.urlencoded({ extended: true }));
};
