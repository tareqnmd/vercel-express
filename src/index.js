import cookieParser from 'cookie-parser';
import express from 'express';

const app = express();
app.use(cookieParser());

app.get('/', (req, res) => {
	res.send('Hello Chicken!');
});

app.get('/check', (req, res) => {
	res.send('Hello Check!');
});

app.listen(process.env.PORT, () => {
	console.log(`Server started on port ${process.env.PORT}`);
});

export default app;
