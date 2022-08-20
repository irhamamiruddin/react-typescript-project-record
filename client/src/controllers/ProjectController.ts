import { Router } from "express";
import { appendFile } from "fs";
import React from "react";

const app = Router();

// Index
app.get("/", (req: any, res: any) => {
	console.log("View All Projects");
});

// Create
app.post("/", (req: any, res: any) => {
	console.log("Create Project");
});

// Show
app.get("/", (req: any, res: any) => {
	console.log("Get 1 Project");
});

// Update
app.put("/:id", (req: any, res: any) => {
	console.log("Update Project");
});

// Delete
app.delete("/:id", (req: any, res: any) => {
	console.log("Delete Project");
});

export default app;
