import jwt from 'jsonwebtoken';

const verifyJwtToken = (req, res, next) => {
    const authHeader = req.headers.authorization;

    // Check if Authorization header is present
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Unauthorized: Token missing or malformed' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Replace with your actual secret key
        req.tokenDetails = decoded; // You can now access user info in `req.user` in further routes
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized: Invalid or expired token' });
    }
};

const createJwtToken = (payload) => {
    // payload should typically include user id, email, role etc.
    return jwt.sign(payload, process.env.JWT_SECRET);
};

export {verifyJwtToken,createJwtToken};
