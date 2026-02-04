const User = require("../models/User");
const userService = require('../services/user.service');

const register = async(req, res)=>{
try{
    const{username, email, password, profilePic}= req.body;
    const user= await userService.register(username, email, password, profilePic);
    res.status(201).json(user);
} catch(err){
    res.status(400).json({message:"Couldn't register"});
}
};


const login = async (req, res)=>{
    try{
        const{email, password}=req.body;
        const result= await userService.login(email, password);

        if(result){
            res.status(200).json(result);
        }else{
            res.status(401).json({message:"Invalid credentials"})
        }
    }catch (err){
        res.status(401).json({message:err.message});
    }
};

const getCurrentUser = async(req,res)=>{
      const token = req.header('x-auth-header');
      try{
    
 const currentUser = await userService.findCurrentUser(token);
    res.status(200).json(currentUser);
    }
    catch(err){
        res.status(500).json({message: "Could not fetch current user"});
    }
}

module.exports = {register, login, getCurrentUser};

