const User= require("../models/user");
const jwt= require("jsonwebtoken");

// const generateToken =(userId)=>{
//     return jwt.sign ({id:userId}, 'secret', {expiresIn:'1d'});};

const JWT_SECRET = process.env.SECRET_OR_KEY;
const JWT_EXPIRES = process.env.JWT_EXPIRES;

const generateToken= (userId)=>{
    return jwt.sign ({ id:userId}, JWT_SECRET, {expiresIn: JWT_EXPIRES})
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
    const user = await findUserByEmail(email);

    if (!user) return null;

    // if (user.password !== password) return null; 
    //sbon kjo mo me hashing se vec per string

    const isMatch = await user.comparePassword(password);
    if (!isMatch) return null;

    const token = generateToken(user._id);

    return {
        user: {
            _id: user._id,
            username: user.username,
            email: user.email,
            profilePic: user.profilePic
        },
        accessToken: token
    };
};

const findUserByEmail = async (email) => {
    return await User.findOne({ email: email });
};

const findUserById = async (id) => {
    return await User.findById(id);
};

const findCurrentUser = async (token) => {
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        return await User.findById(decoded.id).select("-password"); 
    } catch (err) {
        throw new Error("Invalid or expired token");
    }
};

module.exports = { register, login, findUserByEmail, findUserById, findCurrentUser };
