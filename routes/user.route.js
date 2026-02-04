const express= require ('express');
const route = express.Router();
const userController = require('../controllers/user.controller');
const auth= require('../middleware/auth');


route.post('/login', userController.register);
route.post('/register', userController.login);
route.get('/me', auth, userController.getCurrentUser);

module.exports=route;


