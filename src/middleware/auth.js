import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/index.js';
import User from '../models/user.js';

const protect = asyncHandler(async (req, res, next) => {
	let token;
	token = req?.cookies?.token;

	if (token) {
		try {
			const decoded = jwt.verify(token, JWT_SECRET);
			req.user = await User.findById(decoded.userId).select('-password');
			next();
		} catch (error) {
			res.status(401);
			throw new Error('Invalid or Expired token');
		}
	} else {
		res.status(401);
		throw new Error('Unauthorized');
	}
});

export { protect };
