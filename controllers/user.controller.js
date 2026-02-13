const User = require("../models/user");
const userService = require('../services/user.service');

const register = async(req, res)=>{
try{
    const{username, email, password, profilePic}= req.body;
    const user= await userService.register(username, email, password, profilePic);
    res.status(201).json(user);
} catch(err){
    res.status(400).json({message:"Couldn't register", error:err.message
    });
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
     
      try{
        console.log("User", req.user);
    res.status(200).json(req.user);
    }
    catch(err){
        console.log("gabimi:", err)
        res.status(500).json({message: "Could not fetch current user", error:err.message});
    }
}

module.exports = {register, login, getCurrentUser};

