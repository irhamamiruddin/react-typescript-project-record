import React from "react";
import { Project } from "./Project";

interface ProjectCardProps {
	project: Project;
	// onEdit function requires a project as a parameter and returns void
	onEdit: (project: Project) => void;
}

// To format text into a limited length and added with ... (there's a continuation)
function formatDescription(description: string): string {
	return description.substring(0, 60) + "...";
}

function ProjectCard(props: ProjectCardProps) {
	const { project, onEdit } = props;

	// Event Handler
	const handleEditClick = (projectBeingEdited: Project) => {
		onEdit(projectBeingEdited);
	};

	return (
		<div className="card">
			<img src={project.imageUrl} alt={project.name} />
			<section className="section dark">
				<h5 className="strong">
					<strong>{project.name}</strong>
				</h5>
				<p>{formatDescription(project.description)}</p>
				<p>Budget : {project.budget.toLocaleString()}</p>

				{/* onClick() will trigger the event and pass the project */}
				<button
					className="bordered"
					onClick={() => {
						handleEditClick(project);
					}}
				>
					<span className="icon-edit "></span>
					Edit
				</button>
			</section>
		</div>
	);
}

export default ProjectCard;
