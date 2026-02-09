const express= require ('express');
const route=express.Router();

const profileController= require('../controllers/profile.controller');
const auth= require('../middleware/auth');

route.post('/profile', auth, profileController.createProfile);
route.get('/profile/me', auth, profileController.getCurrentProfile);
route.patch('/profile/me', auth, profileController.updateProfile);
route.delete('profile/me', auth, profileController.deleteProfile);

module.exports=route;

