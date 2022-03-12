const express = require('express');
const config = require('./config/config');
const expressConfig = require('./config/express');
const databaseConfig = require('./config/database');
const routesConfig = require('./config/routes');

start();



async function start(){
    const app = express();

    expressConfig(app);
    await databaseConfig(app);
    routesConfig(app);

    app.listen(config.port, () => console.log('Server running on port 3000'));
}