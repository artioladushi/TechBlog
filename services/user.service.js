const User= require("../models/User");
const jwt= require("jsonwebtoken");

// const generateToken =(userId)=>{
//     return jwt.sign ({id:userId}, 'secret', {expiresIn:'1d'});};

const generateToken= (userId)=>{
    return jwt.sign ({ id:userId}, SECRET_OR_KEY, {expiresIn: JWT_EXPIRES})
}
const register=async (username, email, password, profilePic)=>{
    const userExists= await User.findOne({ email: email });
    if (userExists) {
        throw new Error("This user exists");
    }

    const newUser = new User({
       username:username,
       email:email,
       password:password,
       profilePic:profilePic
    });
    
    return await newUser.save();
};

const login = async (email, password) => {
    const user = await findUser(email);
    if (user && user.password === password) {
        const token = generateToken(user._id);
        return {
            user: user,
            accessToken: token
        };
    }
    return null;
};

const findUser = async (email) => {
    return await User.findOne({ email: email });
};

const findCurrentUser = async (token) => {
    const decoded = jwt.verify(token, 'secret');
    const userId = decoded.id;
    const userCurrent = await User.findById(decoded.id).select("-password");
    if (!userCurrent) {
        throw new Error("User not found");
    }
    return userCurrent;
};

module.exports = { register, findUser, login, findCurrentUser };
