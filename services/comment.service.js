const Comment= require('../models/comment');
const Post=require('../models/post');
const Profile = require('../models/profile');

const createComment=async (userId,commentData)=>{
    const { postId, text } = commentData;
    const profile= await Profile.findOne({user:userId});

    if(!profile){ 
    throw new Error("Profile not found");
    }

    const post = await Post.findById(postId);

    if(!post){
        throw new Error("Post not found");
    }

    try{
        const newComment= new Comment({
            user: userId,
            post: postId,
            text: text
        });
        await newComment.save();
        return newComment;
    }catch(err){
        throw new Error("Couldn't post comment")
    }
};
const deleteComment = async (commentId, userId) => {
    const result = await Comment.findOneAndDelete({ _id: commentId, user: userId });
    if (!result) throw new Error("Comment not found");
    return result;
};

const likeComment= async(commentId, userId)=>{
    const comment=await Comment.findById(commentId);

    if(!comment){
        throw new Error ("Comment not found");
    }

    const alreadyLiked= comment.likes.find(like=>like.user.toString()===userId);
    if (alreadyLiked){
        comment.likes=comment.likes.filter(like=>like.user.toString()!==userId);
    }else{
        comment.likes.unshift({user:userId});
    }
    
    await comment.save();
    return comment.likes;
}

module.exports={
    createComment,
    deleteComment,
    likeComment
};

