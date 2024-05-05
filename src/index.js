import bcrypt from 'bcryptjs';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';
import { connectDB } from './db.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
connectDB();

function fetchData(delay) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(`Data fetched after ${delay} seconds!`);
		}, delay * 1000);
	});
}

export const asyncTest = asyncHandler(async (req, res) => {
	const data = await fetchData(2);
	res.send(data);
});

app.get('/', (req, res) => {
	var salt = bcrypt.genSaltSync(10);
	var hash = bcrypt.hashSync('B4c0//', salt);
	var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
	res.send(`Hello Chicken cookie cors json urlencoded! ${hash} - ${token}`);
});

app.get('/check', asyncTest);

app.listen(process.env.PORT, () => {
	console.log(`Server started on port ${process.env.PORT}`);
});

export default app;
