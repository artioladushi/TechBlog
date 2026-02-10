const Profile= require('../models/profile');
const Post= require('../models/post');


const createPost=async(userId, postData)=>{
const profile= await Profile.findOne({user:userId})
if(!profile){ 
    throw new Error("Profile wasn't found");
}

try{
    const newPost= new Post({
    author:userId,
    ...postData

});
await newPost.save();
return newPost;
}catch(err){
    throw new Error("Couldn't post!");
}
};

const deletePost= async ( postId, userId)=>{
    const post= await Post.findOneAndDelete({
        _id: postId,
        author:userId
    });
    if(!post) throw new Error ("Post not found");
    return { message:"Post deleted successfully"}
};



module.exports={
    createPost, deletePost
}
