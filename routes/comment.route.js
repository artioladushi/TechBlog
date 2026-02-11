const commentController = require('../controllers/comment.controller');
const express= require ('express');
const router = express.Router();

const auth= require('../middlewares/authentication');
const { validateComment } = require('../middlewares/validators');



router.post('/', auth, validateComment, commentController.createComment);
router.delete('/:id', auth, commentController.deleteComment);
router.put('/like/:id', auth, commentController.likeComment);


module.exports=router;
