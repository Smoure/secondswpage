import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		fetch("https://swapi.co/api/species/" + props.match.params.anything)
			.then(resp => resp.json())
			.then(data => {
				console.log(data);
				setSpecies(data.results);
			});
	}, []);
	return (
		<div className="card" style={{ width: "200px" }}>
			<img src="..." className="card-img-top" alt="..." />
			{store.demo[props.match.params.anything].map((item, index) => {
				return (
					<>
						<div className="card-body">
							<h5 className="card-title">{props.name}</h5>
						</div>
						<ul className="list-group list-group-flush">
							<li className="list-group-item">Classification: {props.classification}</li>
							<li className="list-group-item">Designation: {props.designation}</li>
							<li className="list-group-item">Average Height: {props.avg_height}</li>
							<li className="list-group-item">Skin Colors: {props.skin_colors}</li>
							<li className="list-group-item">Hair Colors: {props.hair_colors}</li>
							<li className="list-group-item">Eye Colors: {props.eye_colors}</li>
							<li className="list-group-item">Average Lifespan: {props.avg_lifespan}</li>
							<li className="list-group-item">Homeworld: {props.homeworld}</li>
							<li className="list-group-item">Language: {props.language}</li>
							<li className="list-group-item">People: {props.people}</li>
							<li className="list-group-item">Films: {props.films}</li>
							<li className="list-group-item">Created: {props.created}</li>
							<li className="list-group-item">Edited: {props.edited}</li>
							<li className="list-group-item">URL: {props.url}</li>
						</ul>
						<div className="card-body">
							<a href="#" className="card-link">
								Card link
							</a>
							<a href="#" className="card-link">
								Another link
							</a>
						</div>
					</>
				);
			})}
		</div>
	);
};

Single.propTypes = {
	// match: PropTypes.object
	name: PropTypes.string,
	classification: PropTypes.string,
	designation: PropTypes.string,
	avg_height: PropTypes.string,
	skin_colors: PropTypes.string,
	hair_colors: PropTypes.string,
	eye_colors: PropTypes.string,
	avg_lifespan: PropTypes.string,
	homeworld: PropTypes.string,
	language: PropTypes.string,
	people: PropTypes.array,
	films: PropTypes.array,
	created: PropTypes.string,
	edited: PropTypes.string,
	url: PropTypes.string
};

// <div className="jumbotron">
// 	<h1 className="display-4">This will show the demo element: {store.demo[props.match.params.theid].title}</h1>

// </div>
