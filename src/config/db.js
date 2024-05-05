import mongoose from 'mongoose';
import { PASSWORD, USERNAME } from './secret.js';

export const connectDB = async () => {
	try {
		const conn = await mongoose.connect(
			`mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.ndanq8m.mongodb.net??retryWrites=true&w=majority`
		);
		console.log(`Database Connected on ${conn.connection.port}`);
	} catch (err) {
		console.error(`Error: ${err.message}`);
		process.exit(1);
	}
};
