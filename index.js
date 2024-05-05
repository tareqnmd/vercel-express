import express from 'express';

const app = express();

app.get('/', (req, res) => {
	res.send('Hello Chicken!');
});

app.listen(3001);
