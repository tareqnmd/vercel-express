import { NODE_ENV } from '../config/index.js';
import { error_handler, not_found } from './error.js';
const allowedOrigins =
	NODE_ENV === 'production'
		? ['https://vercel-express-eta-silk.vercel.app']
		: ['http://localhost:3200'];

const middleware = (app, cors) => {
	app.use(cors({ credentials: true, origin: allowedOrigins }));
};

export const routeError = (app) => {
	app.use(not_found);
	app.use(error_handler);
};

export default middleware;
