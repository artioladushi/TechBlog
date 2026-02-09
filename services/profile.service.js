const userService = require('./user.service');
const Profile = require('../models/profile'); 


const create=async(userId, profileData)=>{
const user= await userService.findUser(userId);
if (!user){
    throw new Error("User not found!");
}

try{
    const newProfile= new Profile({
        user:userId,
        ...profileData
    });

    await newProfile.save();
 return newProfile; 


}catch (err){
    throw new Error("Could not save profile!");
}
}
const findCurrentProfile= async (userId)=>{
    const profile= await Profile.findOne({user:userId});
    if (!profile) {
        throw new Error("Profile not found!");
    }
    return profile;
}

const updateProfile= async( userId, profileData)=>{
    const profile= await profile.findOne({user:userId});
    if (!profile) 
        {throw new Error("profile not found");
}
Object.assign(profile, profileData); //per mi update fields dynamically
await profile.save();
return profile;
};

const deleteProfile= async (userId)=>{
    const profile= await profile.findOneAndDelete({user:userId});
    if(!profile) throw new Error("Profile not found");
    return {message:"profile deleted succcessfully"};
}

module.exports={
    create, findCurrentProfile, updateProfile, deleteProfile
}


