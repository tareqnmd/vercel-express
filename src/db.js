import mongoose from 'mongoose';

export const connectDB = async () => {
	try {
		const conn = await mongoose.connect(
			`mongodb+srv://tareqnmd:1Nov96mD32mongo@cluster0.ndanq8m.mongodb.net?retryWrites=true&w=majority`
		);
		console.log(`Database Connected on ${conn.connection.port}`);
	} catch (err) {
		console.error(`Error: ${err.message}`);
		process.exit(1);
	}
};
