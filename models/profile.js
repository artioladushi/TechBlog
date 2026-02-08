const mongoose= require('mongoose');

const profileSchema= new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true
    },
    skills:{
        type: [String],
        required: true
    },
    title:{
        type:String,
        required:true,
        maxlength: 50
    },
    bio:{
        type:String,
        maxlength: 400
    },
    githubUsername: {
        type: String
    },
    social: {
        linkedin: { type: String },
        twitter: { type: String },
        website: { type: String }
    },
},  {timestamps:true});

const Profile= mongoose.model('Profile', profileSchema);
module.exports=Profile;