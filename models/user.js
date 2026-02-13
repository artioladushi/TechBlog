const mongoose=require('mongoose');
const bcrypt= require('bcryptjs');


const userSchema= new mongoose.Schema({

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
        minlength:6
    },
    profilePic:{
        type:String
    }
     
    
},{timestamps:true});

userSchema.pre('save', async function(next){
    if(!this.isModified('password')) return next();
    this.password=await bcrypt.hash(this.password,12);

})
// 12 quhet cost factor e gjeneron nje salt automatikisht
// salt mundesonqe dy users te ndryshem me pw 
// te njejte me pas hashing te ndryshem


userSchema.methods.comparePassword=async function (enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
}

//hashing is a one way thing dmth smunesh me decrypt 
// per me check a eshte mire pw

const User= mongoose.model('User', userSchema);
module.exports=User;