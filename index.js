const express = require('express');
const mongoose = require("mongoose");
const { MONGO_USER, MONGO_PASSWORD, MONGO_IP, MONGO_PORT } = require('./config/config');

const app = express();

const mongoUrl = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;

const connectWithRetry = () => {
    mongoose
    .connect(mongoUrl)
    .then( () => console.log("Successfully Connected to mongo database"))
    .catch( e => { 
        console.log(e);
        setTimeout(connectWithRetry, 5000);
    });
};
// for 30 seconds, it retries automatically




app.get('/',    (req,res) => {
    res.send('<h2>Hi There in development!!!</h2>');
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`));


