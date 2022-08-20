import React, { useState } from "react";
import { Project } from "./Project";
import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectForm";

// Define the properties that come into the component
interface ProjectListProps {
	projects: Project[];
	onSave: (project: Project) => void;
}

// Takes projects array as props
function ProjectList({ projects, onSave }: ProjectListProps) {
	// Add state
	const [projectBeingEdited, setProjectBeingEdited] = useState({});

	const handleEdit = (project: Project) => {
		setProjectBeingEdited(project);
	};

	const cancelEditing = () => {
		setProjectBeingEdited({});
	};

	return (
		<div className="row">
			{projects.map((project) => (
				<div key={project.id} className="cols-sm">
					{/* Condition to either show form or card */}
					{project === projectBeingEdited ? (
						<ProjectForm
							project={project}
							onCancel={cancelEditing}
							onSave={onSave}
						/>
					) : (
						<ProjectCard project={project} onEdit={handleEdit} />
					)}
				</div>
			))}
		</div>
	);
}

export default ProjectList;
