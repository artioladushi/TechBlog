const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const mongoDbConnection = mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("Connected to db successfully!");
})
.catch((err) => {
    console.log("Could not connect to DB", err);
});


module.exports = mongoDbConnection;