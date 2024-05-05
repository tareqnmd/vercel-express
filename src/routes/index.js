import authRoutes from './auth.js';

const routes = (app) => {
	app.get('/', (_, res) => {
		res.send('Welcome to Vercel Express');
	});
	authRoutes(app);
};

export default routes;
