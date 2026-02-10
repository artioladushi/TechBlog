const postService=require('../services/post.service');
const userService=require('../services/user.service');
const profileService=require('../services/profile.service');


const createPost= async (req,res)=>{
    // const token= req.header('x-auth-header'); nuk te duhen mo se jane ne middleware
    try{
        const profile=await profileService.findCurrentProfile(req.user.id);
        const post= await postService.create(profile._id, req.body);
        return res.status(201).json(post);
    } catch(err){
        return res.status(500).json({
            message:'Failed to create post',
            error:err.message
        });
    }

}

const deletePost= async(req, res)=>{
try{
    const postId=req.params.id;
    const userId=req.user.id;
    
    const result= await postService.deletePost(postId, user.Id);
    return res.status(200).json({message:'Post deleted',result});
    }catch (err){
        res.status(500).json({message:'Failed to dlete post'})
    }
}



module.exports={
    createPost,
    deletePost
}