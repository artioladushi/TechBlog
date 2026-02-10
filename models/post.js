const mongoose= require('mongoose');
const postSchema= new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    content:{
        type:String,
        required:true
    },
    category:{
        type:String,
        enum:['Frontend', 'Backend','Mobile', 'AI', 'Tech'],
        default: 'Tech'
    },
    author:{
            type: mongoose.Schema.Types.ObjectId,
            ref:'User',
            required:true
        },
    image:{
        type: String
    },
    likes:[{
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            }
        }]
}, {timestamps:true});

const Post= mongoose.model('Post', postSchema);
module.exports =Post;
    