import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import { connectDB } from './db.js';
import routes from './routes/index.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
connectDB();

routes(app);

app.listen(process.env.PORT, () => {
	console.log(`Server started on port ${process.env.PORT}`);
});

export default app;
