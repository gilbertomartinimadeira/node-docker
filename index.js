const express = require('express');
const mongoose = require("mongoose");
const session = require('express-session');
const redis = require('redis');
let RedisStore = require("connect-redis").default;

const { MONGO_USER, 
    MONGO_PASSWORD, 
    MONGO_IP, 
    MONGO_PORT, 
    REDIS_URL, 
    SESSION_SECRET, 
    REDIS_PORT} = require('./config/config');


/// MONGO CONFIGURATION
const mongoUrl = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/mydb?authSource=admin`;

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
connectWithRetry();
///END OF MONGO CONFIG



///REDIS CONFIG
let redisClient = redis.createClient({
    host: REDIS_URL,
    port: REDIS_PORT
})

redisClient.connect()
.then( () => console.log("redis client ready"))
.catch((e) => {
    console.log(e)
});    


// Initialize store.
let redisStore = new RedisStore({
    client: redisClient,
    prefix: 'node-app'
})

const app = express();

app.use(
    session({
      store: redisStore,
      resave: true, // required: force lightweight session keep alive (touch)
      saveUninitialized: true, // recommended: only save session when data exists
      secret: SESSION_SECRET,
    }),
  );
///END OF REDIS CONFIG
    


app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const postRoutes = require('./routes/postRoutes');
const userRoutes = require('./routes/userRoutes');

app.use("/api/v1/posts", postRoutes);
app.use("/api/v1/users", userRoutes);




app.get('/',    (req,res) => {
    res.send('<h2>Hi There in development!!!</h2>');
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`));


//3:06:53