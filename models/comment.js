const mongoose= require ('mongoose');

const commentSchema= new mongoose.Schema({
    text:{
        type:String,
        required:true
    },
    user:{
        type: mongoose.Schema.TypesObjectId,
        ref: User,
        reqired:true
    },
    post:{
        type: mongoose.Schema.TypeObjectId,
        ref:post,
        required:true
    }
},{
    timestamps:true
});

const Comment= mongoose.model('Comment', commentSchema);
module.exports= Comment;
