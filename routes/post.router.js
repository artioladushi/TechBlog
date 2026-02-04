const express= require ('express');
const route = express.Router();

const auth= require('../middleware/auth');
const { validatePost } = require('../middleware/validator');

module.exports=route;
