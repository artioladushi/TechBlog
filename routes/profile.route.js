const express= require ('express');
const route=express.Router();

const profileController= require('../controllers/profile.controller');
const auth= require('../middlewares/authentication');

route.post('/', auth, profileController.createProfile);
route.get('/me', auth, profileController.getCurrentProfile);
route.patch('/me', auth, profileController.updateProfile);
route.delete('/me', auth, profileController.deleteProfile);

module.exports=route;

