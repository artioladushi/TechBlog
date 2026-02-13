const profileService = require('../services/profile.service');
const userService = require('../services/user.service');
const Profile = require('../models/profile');
const mongoose = require('mongoose')

const createProfile = async (req, res) => {
    try {
    
        const profile = await profileService.create(req.user.id, req.body);

        return res.status(201).json(profile);
    } catch (err) {
        return res.status(500).json({
            message: 'Failed to create profile',
            error: err.message
        });
    }
};

const getCurrentProfile = async (req, res) => {

    try {
       
        const profile = await profileService.findCurrentProfile(req.user.id, req.body);

        if (!profile) {
            return res.status(404).json({ message: 'Profile not found' });
        }

        return res.status(200).json(profile);
    } catch (err) {
        return res.status(500).json({
            message: 'Failed to fetch profile',
            error: err.message
        });
    }
};

const updateProfile = async (req, res)=>{
    try{
        
        const updatedProfile= await profileService.updateProfile(req.user.id, req.body);
        res.status(200).json(updatedProfile);
    }catch (err){
        res.status(500).json({message:"Failed to update profile", error:err.message});
    }
};

const deleteProfile= async( req, res)=>{
 
    try{

       const result= await profileService.deleteProfile(req.user.id);
       res.status(200).json(result); 
    }catch(err){
        res.status(500).json({message:'Failed to delete profile', error:err.message})
    }
}

module.exports = {
    createProfile,
    getCurrentProfile,
    updateProfile,
    deleteProfile
};

