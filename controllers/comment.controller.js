const commentService= require('../services/comment.service');

   
        
const createComment= async (req, res)=>{
try{
    const userId=req.user.id;
    const comment= await commentService.createComment(userId,req.body);
    return res.status(201).json(comment);
}catch(err){
    return res.status(500).json({
        error:err.message
    });
}
}

const deleteComment=async(req, res)=>{
    try{
    const commentId=req.params.id;
    const userId=req.user.id;
const result=await commentService.deleteComment(commentId, userId);
return res.status(200).json({message:'Comment deleted successfully', result})

    }catch(err){
        res.status(500).json({message:'Failed to delete comment', error:err.message})
    }
}

module.exports={
    createComment,
    deleteComment
}