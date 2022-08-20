/*  
    import React from 'react';
    is not required in the latest version(s) 
    of React because it uses a new JSX Transform. 
    
    With the new JSX Transform, the import statement is only 
    needed at the entry point of the application which is 
    src\index.js
*/
// import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { MOCK_PROJECTS } from "./MockProjects";
import { Project } from "./Project";
import { projectAPI } from "./projectAPI";
import ProjectList from "./ProjectList";

function ProjectsPage() {
	const [projects, setProjects] = useState<Project[]>(MOCK_PROJECTS);
	// const [projects, setProjects] = useState<Project[]>([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | undefined>(undefined);
	const [currentPage, setCurrentPage] = useState(1);

	const handleMoreClick = () => {
		setCurrentPage((currentPage) => currentPage + 1);
	};

	// Loading data into API
	useEffect(() => {
		async function loadProjects() {
			setLoading(true);
			try {
				const data = await projectAPI.get(currentPage);
				setError("");
				if (currentPage === 1) {
					setProjects(data);
				} else {
					setProjects((projects) => [...projects, ...data]);
				}
			} catch (e) {
				if (e instanceof Error) {
					setError(e.message);
				}
			} finally {
				setLoading(false);
			}
		}
		loadProjects();
	}, [currentPage]);

	const saveProject = (project: Project) => {
		// console.log("Saving Project: ", project);
		projectAPI
			.put(project)
			.then((updatedProject) => {
				let updatedProjects = projects.map((p: Project) => {
					return p.id === project.id ? new Project(updatedProject) : p;
				});
				setProjects(updatedProjects);
			})
			.catch((e) => {
				if (e instanceof Error) {
					setError(e.message);
				}
			});
	};

	return (
		// React Fragment <></> to return multiple root element
		<>
			<h1>Projects</h1>
			{error && (
				<div className="row">
					<div className="card large error">
						<section>
							<p>
								<span className="icon-alert inverse "></span>
								{error}
							</p>
						</section>
					</div>
				</div>
			)}

			{/* Pass the MOCK_PROJECTS array to props */}
			<ProjectList projects={projects} onSave={saveProject} />
			{!loading && !error && (
				<div className="row">
					<div className="col-sm-12">
						<div className="button-group fluid">
							<button className="button default" onClick={handleMoreClick}>
								More...
							</button>
						</div>
					</div>
				</div>
			)}
			{loading && (
				<div className="center-page">
					<span className="spinner primary"></span>
					<p>Loading...</p>
				</div>
			)}
		</>
	);
}

export default ProjectsPage;
