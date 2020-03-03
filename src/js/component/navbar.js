import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<Link to={"/"} className="navbar-brand" href="#">
				Star Wars
			</Link>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNavDropdown"
				aria-controls="navbarNavDropdown"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>
			<div className="collapse navbar-collapse" id="navbarNavDropdown">
				<ul className="navbar-nav">
					<li className="nav-item active">
						<Link to={"/"} className="nav-link" href="#">
							Home
						</Link>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Planets
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Starships
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};
