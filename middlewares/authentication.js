const jwt= require('jsonwebtoken');
const User = require('../models/User');

const auth = (req, res, next)=>{
    const token= req.header('x-auth-header');

    if(!token){
        return res.status(401).json({msg:"No token provided"});
    }

    const JWT_SECRET = process.env.SECRET_OR_KEY;
    //JWT secret key from env variables for security reasons
    try{
    const decoded= jwt.verify(token, JWT_SECRET);
        req.user=decoded;
            next();
    } catch(err){
        res.status(401).json({msg:"Token is invalid or expired"});
    }
}
module.exports= auth;
