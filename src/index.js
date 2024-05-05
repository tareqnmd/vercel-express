import bcrypt from 'bcryptjs';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

app.get('/', (req, res) => {
	var salt = bcrypt.genSaltSync(10);
	var hash = bcrypt.hashSync('B4c0//', salt);
	res.send(`Hello Chicken cookie cors json urlencoded! ${hash}`);
});

app.get('/check', (req, res) => {
	res.send('Hello Check!');
});

app.listen(process.env.PORT, () => {
	console.log(`Server started on port ${process.env.PORT}`);
});

export default app;
