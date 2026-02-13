require('dotenv').config();
const mongoDbConnection=require("./db/connection"); 

const express = require("express");
const app = express();

mongoDbConnection.then(() => {
    console.log("Database is ready");
}).catch((err) => {
    console.log("Database connection error:", err);
});

app.use(express.json());
app.use('/api/user', require('./routes/user.route'));
app.use('/api/profile', require('./routes/profile.route'));
app.use('/api/post', require('./routes/post.router'));
app.use('/api/comment', require('./routes/comment.route'));

const PORT=process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
