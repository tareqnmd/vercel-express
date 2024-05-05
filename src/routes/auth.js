import { loginUser, logoutUser, registerUser } from '../controllers/auth.js';

const authRoutes = (app) => {
	app.post('/login', loginUser);
	app.post('/register', registerUser);
	app.post('/logout', logoutUser);
};

export default authRoutes;
