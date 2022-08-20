import mongoose from "mongoose";
import dotenv, { config } from "dotenv";

dotenv.config();

const dbUrl: any = process.env.REACT_APP_DB_URL;

mongoose
	.connect(dbUrl)
	.then((connection: any) => {
		console.log("db connected");
	})
	.catch((e: any) => {
		console.log("Error", e);
	});
