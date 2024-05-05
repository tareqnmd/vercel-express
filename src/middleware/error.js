import { NODE_ENV } from '../config/index.js';

const not_found = (req, res, next) => {
	const err = new Error(`Not Found - ${req.originalUrl}`);
	res.status(404);
	next(err);
};

const error_handler = (err, req, res, next) => {
	let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
	let message = err.message;

	// If Mongoose not found error, set to 404 and change message
	if (err.name === 'CastError' && err.kind === 'ObjectId') {
		statusCode = 404;
		message = 'Resource not found';
	}

	res.status(statusCode).json({
		message,
		stack: NODE_ENV === 'production' ? null : err.stack,
	});
};

export { error_handler, not_found };
