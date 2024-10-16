import mongoose from "mongoose";

export const db = async () => {
	try {
		const dbInstance = await mongoose.connect(`${process.env.DB_URI}`);
		const connection = mongoose.connection;

		connection.on("connected", () => {
			console.log("db connected successfully", dbInstance.connection.host);
		});

        connection.on("error",(error) =>{
            console.log("mongodb connection error", error);
            process.exit(1);
        })
	} catch (error) {
		console.log("Failed to connect to MongoDB", error);
	}
};
