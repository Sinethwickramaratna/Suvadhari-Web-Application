const jwt = require("jsonwebtoken");
const User = require("../models/User");
const logger = require("../utils/logger");

exports.protect = async (req, res, next) => {
    try {
        let token;
        if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
            token = req.headers.authorization.split(" ")[1];
            logger.debug('AuthMiddleware', 'Token found in Authorization Header');
        } else if (req.cookies && req.cookies.token) {
            token = req.cookies.token;
            logger.debug('AuthMiddleware', 'Token found in Cookies');
        }

        if (!token) {
            logger.warn('AuthMiddleware', 'No token found in request');
            return res.status(401).json({ message: "Not authorized to access this route" });
        }

        // Verify token
        let decoded;
        try {
            decoded = jwt.verify(token, process.env.JWT_SECRET || 'fallback_secret');
            logger.info('AuthMiddleware', 'Token verified successfully', { userId: decoded.userId });
        } catch (err) {
            logger.error('AuthMiddleware', 'Token verification failed', err);
            return res.status(401).json({ message: "Invalid or expired token" });
        }

        // Check if user still exists
        const user = await User.findById(decoded.userId);
        if (!user) {
            logger.warn('AuthMiddleware', 'User not found', { userId: decoded.userId });
            return res.status(401).json({ message: "The user belonging to this token no longer exists" });
        }

        req.user = user;
        next();
    } catch (error) {
        logger.error('AuthMiddleware', 'Critical middleware error', error);
        res.status(401).json({ message: "Not authorized" });
    }
};

exports.authorize = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({
                message: `User role ${req.user.role} is not authorized to access this route`
            });
        }
        next();
    };
};
