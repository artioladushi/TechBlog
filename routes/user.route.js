const express= require ('express');
const route = express.Router();
const userController = require('../controllers/user.controller');
const auth= require('../middleware/auth');
const { validateRegister, validateLogin } = require('../middleware/validator');


route.post('/register', validateRegister, userController.login);
route.post('/login', validateLogin, userController.register);
route.get('/me', auth, userController.getCurrentUser);

module.exports=route;


