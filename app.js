const express = require("express");
require('dotenv').config();

const mongoDbConnection=require("./db/connection"); 
const app = express();

mongoDbConnection.then(() => {
    console.log("Database is ready");
}).catch((err) => {
    console.log(err);
});

app.use(express.json());

app.listen(3000, () => {
    console.log("Server started on port 3000.");
});
