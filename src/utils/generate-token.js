import jwt from 'jsonwebtoken';
import { JWT_SECRET, NODE_ENV } from '../config/index.js';

export const generateToken = (res, userId) => {
	const token = jwt.sign({ userId }, JWT_SECRET, {
		expiresIn: '30d',
	});

	res.cookie('token', token, {
		httpOnly: true,
		// Use secure cookies in production
		secure: NODE_ENV === 'production',
		// Prevent CSRF attacks
		sameSite: 'strict',
		maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
	});
};

