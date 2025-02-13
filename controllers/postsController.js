const posts = require('../models/post');
const postService = require('../services/postService');

// Get all posts with pagination
const getAllPosts = (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const result = posts.slice(startIndex, endIndex);
    
    res.json(result);
};

// Get a single post by ID
const getPostById = (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.json(post);
};

// Create a new post
const createPost = (req, res) => {
    const { title, content, author } = req.body;
    if (!title || !content || !author) {
        return res.status(400).json({ message: 'Title, content, and author are required' });
    }

    const newPost = postService.createPost({ title, content, author });
    res.status(201).json(newPost);
};

// Update a post
const updatePost = (req, res) => {
    const postId = parseInt(req.params.id);
    const postIndex = posts.findIndex(p => p.id === postId);
    if (postIndex === -1) return res.status(404).json({ message: 'Post not found' });

    const { title, content, author } = req.body;
    if (!title || !content || !author) {
        return res.status(400).json({ message: 'Title, content, and author are required' });
    }

    posts[postIndex] = { id: postId, title, content, author, comments: [] };
    res.json(posts[postIndex]);
};

// Delete a post
const deletePost = (req, res) => {
    const postId = parseInt(req.params.id);
    const postIndex = posts.findIndex(p => p.id === postId);
    if (postIndex === -1) return res.status(404).json({ message: 'Post not found' });

    posts.splice(postIndex, 1);
    res.status(204).send();
};

// Add a comment to a post
const addComment = (req, res) => {
    const postId = parseInt(req.params.id);
    const post = posts.find(p => p.id === postId);
    if (!post) return res.status(404).json({ message: 'Post not found' });

    const { comment } = req.body;
    if (!comment) return res.status(400).json({ message: 'Comment is required' });

    post.comments.push(comment);
    res.status(201).json(post);
};

module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost,
    addComment
};
