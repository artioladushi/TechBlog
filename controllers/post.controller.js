const postService=require('../services/post.service');
const userService=require('../services/user.service');
const profileService=require('../services/profile.service');


const createPost= async (req,res)=>{
    try{
        const post= await postService.createPost(req.user.id, req.body);
        return res.status(201).json(post);
    } catch(err){
        return res.status(500).json({
            error:err.message
        });
    }

}

const deletePost= async(req, res)=>{
try{
    const postId=req.params.id;
    const userId=req.user.id;
    
    const result= await postService.deletePost(postId, userId);
    return res.status(200).json({message:'Post deleted',result});
    }catch (err){
        res.status(500).json({message:'Failed to delete post', error:err.message})
    }
}



module.exports={
    createPost,
    deletePost
}