const express = require('express');
const mongoose = require("mongoose");

const app = express();

mongoose.connect(
    'mongodb://gil:admin123@mongo:27017/?authSource=admin')
    .then( () => console.log("Successfully Connecte to mongo database"))
    .catch( e => console.log(e));



app.get('/',    (req,res) => {
    res.send('<h2>Hi There in development!!!</h2>');
});

const port= process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`));


