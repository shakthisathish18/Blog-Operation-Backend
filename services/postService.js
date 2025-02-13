let posts = require('../models/post');

// Service to create a new post
const createPost = (postData) => {
    const newPost = {
        id: posts.length + 1,  // simplistic ID generation
        comments: [],
        ...postData
    };
    posts.push(newPost);
    return newPost;
};

module.exports = {
    createPost
};
