import mongoose from "mongoose";

export const _schema = new mongoose.Schema({
	name: { type: String, required: true, unique: true },
	description: { type: String, required: true },
	imageUrl: { type: String },
	contractTypeId: { type: Number },
	contractSignedOn: { type: Date, default: Date.now },
	budget: { type: Number, required: true },
	isActive: { type: Boolean },
});

export const model = mongoose.model("projects", _schema);
