import React from "react";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import "./App.css";
import HomePage from "./home/HomePage";
import ProjectsPage from "./projects/ProjectsPage";

function App() {
	return (
		// <blockquote cite="Benjamin Franklin">
		//   Tell me and I forget, teach me and I may remember, involve me and I learn.
		// </blockquote>

		//replace above code with a component
		<BrowserRouter>
			<header className="sticky">
				<span className="logo">
					<img src="/assets/logo-3.svg" alt="logo" width="49" height="99" />
				</span>
				<NavLink to="/" className="button rounded">
					<span className="icon-home"></span>
					Home
				</NavLink>
				<NavLink to="/projects" className="button rounded">
					Projects
				</NavLink>
			</header>
			<div className="container">
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/projects" element={<ProjectsPage />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;