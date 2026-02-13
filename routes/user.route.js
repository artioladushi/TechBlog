const express= require ('express');
const route = express.Router();
const userController = require('../controllers/user.controller');
const auth= require('../middlewares/authentication');
const { validateRegister, validateLogin } = require('../middlewares/validators');


route.post('/register', validateRegister, userController.register);
route.post('/login', validateLogin, userController.login);
route.get('/me', auth, userController.getCurrentUser);


module.exports=route;


