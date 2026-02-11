const {body, validationResult}= require('express-validator');

const validateRegistration= (req, res, next)=>{
    const errors= validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }
    next();
}

const validateRegister=[
    body('username')
    .notEmpty().withMessage('Username is required')
    .isString().withMessage('Username must be a string'),

    body('email')
    .notEmpty().withMessage("Email is required")
    .isEmail().withMessage("Email must be in the right format"),

    body('password').
    notEmpty().withMessage("Password is required")
    .isLength({min:6}).withMessage("Password's length must be at least 6 characters"),
    validateRegistration
];

const validateLogin=[
    body('email')
    .notEmpty().withMessage("Email is required")
    .isEmail().withMessage("Email must be in the right format"),

    body('password')
    .notEmpty().withMessage("Password is required"),
    validateRegistration
];

const validatePost = [
    body('title')
        .notEmpty().withMessage("Title is required")
        .isLength({ min: 5 }).withMessage("Title must be at least 5 characters long"),
    body('content')
        .notEmpty().withMessage("Post content is required")
        .isLength({ min: 10 }).withMessage("Content is too short"),
    body('category')
        .isIn(['Frontend', 'Backend', 'Mobile', 'AI', 'Tech'])
        .withMessage("Category must be one of: Frontend, Backend, Mobile, AI, Tech"),
    validateRegistration
];

const validateComment=[
    body('text')
    .notEmpty().withMessage("Comment content is required")
    .isString().withMessage("Comment must be string"),
    validateRegistration
]

module.exports={
    validateRegister,
    validateLogin,
    validatePost,
    validateComment

};
