import React, { SyntheticEvent, useState } from "react";
import { Project } from "./Project";

interface ProjectFormProps {
	project: Project;
	onCancel: () => void;
	onSave: (project: Project) => void;
}

function ProjectForm({
	project: initialProject,
	onCancel,
	onSave,
}: ProjectFormProps) {
	// State variables
	const [project, setProject] = useState(initialProject);
	const [errors, setErrors] = useState({
		name: "",
		description: "",
		budget: "",
	});

	const handleSubmit = (event: SyntheticEvent) => {
		event.preventDefault();
		// Don't save if the form is not valid
		if (!isValid()) return;
		else onSave(project);
	};

	const handleChange = (event: any) => {
		const { type, name, value, checked } = event.target;

		// If type checkbox use checked, else use value
		let updatedValue = type === "checkbox" ? checked : value;

		if (type === "number") {
			// cast updatedValue into number
			updatedValue = Number(updatedValue);
		}
		const change = {
			[name]: updatedValue,
		};

		let updatedProject: Project;

		setProject((p) => {
			updatedProject = new Project({ ...p, ...change });
			return updatedProject;
		});

		setErrors(() => validate(updatedProject));
	};

	// Function validation
	function validate(project: Project) {
		let errors: any = { name: "", description: "", budget: "" };
		if (project.name.length === 0) {
			errors.name = "Name is required!";
		}

		if (project.name.length > 0 && project.name.length < 3) {
			errors.name = "Name need to be at least 3 characters!";
		}

		if (project.description.length === 0) {
			errors.description = "Description is required!";
		}

		if (project.budget <= 0) {
			errors.budget = "Budget must be more than $0";
		}

		return errors;
	}

	// Check if there is a need for validation
	function isValid() {
		return (
			errors.name.length === 0 &&
			errors.description.length === 0 &&
			errors.budget.length === 0
		);
	}

	/* 
        html to jsx
	    class -> className
	    for -> htmlFor
    */
	return (
		<form className="input-group vertical" onSubmit={handleSubmit}>
			<label htmlFor="name">Project Name</label>
			<input
				type="text"
				name="name"
				placeholder="enter name"
				value={project.name}
				onChange={handleChange}
			/>
			{errors.name.length > 0 && (
				<div className="card error">
					<p>{errors.name}</p>
				</div>
			)}
			<label htmlFor="description">Project Description</label>

			<textarea
				name="description"
				placeholder="enter description"
				value={project.description}
				onChange={handleChange}
			></textarea>
			{errors.description.length > 0 && (
				<div className="card error">
					<p>{errors.description}</p>
				</div>
			)}
			<label htmlFor="budget">Project Budget</label>

			<input
				type="number"
				name="budget"
				placeholder="enter budget"
				value={project.budget}
				onChange={handleChange}
			/>
			{errors.budget.length > 0 && (
				<div className="card error">
					<p>{errors.budget}</p>
				</div>
			)}
			<label htmlFor="isActive">Active?</label>
			<input
				type="checkbox"
				name="isActive"
				checked={project.isActive}
				onChange={handleChange}
			/>

			<div className="input-group">
				<button className="primary bordered medium">Save</button>
				<span></span>
				<button type="button" className="bordered medium" onClick={onCancel}>
					Cancel
				</button>
			</div>
		</form>
	);
}

export default ProjectForm;
