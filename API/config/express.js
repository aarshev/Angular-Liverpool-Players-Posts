const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const cookieSecret = process.env.COOKIESECRET || 'AArshev';
const cors = require('cors');

module.exports = (app) => {
    app.use(express.json());
    app.use(cookieParser(cookieSecret));
    app.use(cors());
    app.use(express.urlencoded({ extended: true }));
};
