const express= require ('express');
const route = express.Router();

const auth= require('../middlewares/authentication');
const { validatePost } = require('../middlewares/validators');

module.exports=route;
