const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController');
const authenticate = require('../middlewares/authMiddleware');
const validatePostData = require('../middlewares/validationMiddleware');

// CRUD routes for posts with pagination
router.get('/', postsController.getAllPosts);
router.get('/:id', postsController.getPostById);
router.post('/', authenticate, validatePostData, postsController.createPost);
router.put('/:id', authenticate, validatePostData, postsController.updatePost);
router.delete('/:id', authenticate, postsController.deletePost);

// Add a comment to a post
router.post('/:id/comments', authenticate, postsController.addComment);

module.exports = router;
