const express = require('express');
const bodyParser = require('body-parser');
const postsRouter = require('./routes/posts');

// Initialize the app
const app = express();

// Middleware
app.use(bodyParser.json()); // To parse JSON request bodies

// Routes
app.use('/posts', postsRouter);

// Error handling middleware
app.use((err, req, res, next) => {
    res.status(500).json({ error: err.message });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
