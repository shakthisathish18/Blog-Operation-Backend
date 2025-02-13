// Simple API key-based authentication
const authenticate = (req, res, next) => {
    const apiKey = req.headers['api-key'];
    const validApiKey = 'P001-14-02-2025';

    if (apiKey !== validApiKey) {
        return res.status(403).json({ message: 'Unauthorized access' });
    }
    
    next();
};

module.exports = authenticate;
