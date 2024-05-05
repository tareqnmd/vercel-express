import asyncHandler from 'express-async-handler';
import User from '../models/user.js';
import { generateToken } from '../utils/index.js';

// @desc Auth User/Set Token
// route POST /user/login
// @access Public
export const loginUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body;
	const user = await User.findOne({ email });
	if (user && (await user.matchPassword(password))) {
		generateToken(res, user._id);
		res.json({
			_id: user._id,
			name: user.name,
			email: user.email,
			role: user.role,
			status: user.status,
		});
	} else {
		res.status(401);
		throw new Error('Invalid email or password');
	}
});

// @desc Register User
// route POST /user/register
// @access Public
export const registerUser = asyncHandler(async (req, res) => {
	const { name, email, password } = req.body;
	const userExists = await User.findOne({ email });
	if (userExists) {
		res.status(400);
		throw new Error('User already exists');
	}
	const user = await User.create({
		name,
		email,
		password,
		role: 1,
		status: 1,
	});
	if (user) {
		generateToken(res, user._id);
		res.status(201).json({
			_id: user._id,
			name: user.name,
			email: user.email,
			role: user.role,
			status: user.status,
		});
	} else {
		res.status(400);
		throw new Error('Invalid user data');
	}
});

// @desc Logout User
// route POST /user/logout
// @access Public
export const logoutUser = asyncHandler(async (req, res) => {
	res.cookie('token', '', {
		httpOnly: true,
		expires: new Date(0),
	});
	res.status(200).json({ message: 'User logged out' });
});
