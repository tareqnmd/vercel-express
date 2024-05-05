//DECLARATION
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import { PORT, connectDB } from './config/index.js';
import middleware from './middleware/index.js';
import routes from './routes/index.js';

//CONFIGURATION
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
connectDB();

// MIDDLEWARE
middleware(app, cors);

//ROUTES
routes(app);

// SERVER
app.listen(PORT, () => {
	console.log(`Server started on port -> ${PORT}`);
});

export default app;
