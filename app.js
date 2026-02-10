require('dotenv').config();
const express = require("express");


const mongoDbConnection=require("./db/connection"); 
const app = express();

mongoDbConnection.then(() => {
    console.log("Database is ready");
}).catch((err) => {
    console.log(err);
});

app.use(express.json());
app.use('/api/user', require('./routes/user.route'));
app.use('/api/profile', require('./routes/profile.route'));
app.use('/api/post', require('./routes/post.router'));
app.use('/api/comment', require('./routes/comment.route'));

app.listen(3000, () => {
    console.log("Server started on port 3000.");
});
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

console.log("Test", process.env.SECRET_OR_KEY);