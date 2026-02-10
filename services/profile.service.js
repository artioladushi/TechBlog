const userService = require('./user.service');
const Profile = require('../models/profile'); 


const create=async(userId, profileData)=>{
const user= await userService.findUserById(userId);
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
    console.error("Error te MongoDB Save:", err.message);
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
    const profile= await Profile.findOne({user:userId});
    if (!profile) 
        {throw new Error("profile not found");
}
Object.assign(profile, profileData); //per mi update fields dynamically
await profile.save();
return profile;
};

const deleteProfile= async (userId)=>{
    const profile= await Profile.findOneAndDelete({user:userId});
    if(!profile) throw new Error("Profile not found");
    return {message:"profile deleted succcessfully"};
}

module.exports={
    create, findCurrentProfile, updateProfile, deleteProfile
}


