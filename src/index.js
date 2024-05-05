import express from 'express';

const app = express();

app.get('/', (req, res) => {
	res.send('Hello Chicken!');
});

app.get('/check', (req, res) => {
	res.send('Hello Check!');
});

app.listen(3001);

export default app;
