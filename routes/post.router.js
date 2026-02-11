const postController = require('../controllers/post.controller');
const express= require ('express');
const router = express.Router();

const auth= require('../middlewares/authentication');

const { validatePost } = require('../middlewares/validators');


router.post('/', auth,validatePost, postController.createPost)
router.delete('/:id', auth, postController.deletePost);
router.put('/like/:id', auth, postController.likePost);


module.exports=router;
