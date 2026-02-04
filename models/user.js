const mongoose=require('mongoose');

const profileSchema= new mongoose.Schema({

    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    avatar:{
        type:String
    }
     
    
},{timestamps:true});

const User= mongoose.model('User', UserSchema);
module.exports=User;
