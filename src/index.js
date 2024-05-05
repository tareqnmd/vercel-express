import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import { PORT } from './config/secret.js';
import { connectDB } from './db.js';
import middleware from './middleware/index.js';
import routes from './routes/index.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
connectDB();

middleware(app, cors);

routes(app);

app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});

export default app;
