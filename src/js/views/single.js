import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	// const [species, setSpecies] = useState({});
	// useEffect(() => {
	// 	fetch("https://swapi.co/api/species/" + props.match.params.anything)
	// 		.then(resp => resp.json())
	// 		.then(data => {
	// 			console.log(data);
	// 			setSpecies(data);
	// 		});
	// }, []);

	// let name = store.demo[props.match.params.item].name;
	// let classif = store.demo[props.match.params.item].classification;
	// let designation = store.demo[props.match.params.item].designation;
	// let avg_height = store.demo[props.match.params.item].average_height;
	// let skin_colors = store.demo[props.match.params.item].skin_colors;
	// let hair_colors = store.demo[props.match.params.item].hair_colors;
	// let eye_colors = store.demo[props.match.params.item].eye_colors;
	// let avg_lifespan = store.demo[props.match.params.item].average_lifespan;
	// let homeworld = store.demo[props.match.params.item].homeworld;
	// let language = store.demo[props.match.params.item].language;
	// let people = store.demo[props.match.params.item].people;
	// let films = store.demo[props.match.params.item].films;
	// let created = store.demo[props.match.params.item].created;
	// let edited = store.demo[props.match.params.item].edited;
	// let url = store.demo[props.match.params.item].url;

	return (
		<>
			<div className="jumbotron jumbotron-fluid">
				<div className="container">
					<h1 className="display-4">
						Star Wars Species: <strong>{store.demo[props.match.params.theid].name}</strong>
					</h1>
				</div>
			</div>

			<div className="container p-5">
				<div
					id="hpcard"
					className="mb-3 mx-2 border border-warning bg-light text-dark rounded"
					style={{ width: "700px" }}>
					<div className="card">
						<img src={store.pictures[props.match.params.theid].img} className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">{store.demo[props.match.params.theid].name}</h5>
						</div>
						<ul className="list-group list-group-flush">
							<li className="list-group-item">
								<strong>Classification:</strong> {store.demo[props.match.params.theid].classification}
							</li>
							<li className="list-group-item">
								<strong>Designation:</strong> {store.demo[props.match.params.theid].designation}
							</li>
							<li className="list-group-item">
								<strong>Average Height:</strong> {store.demo[props.match.params.theid].average_height}
							</li>
							<li className="list-group-item">
								<strong>Skin Colors:</strong> {store.demo[props.match.params.theid].skin_colors}
							</li>
							<li className="list-group-item">
								<strong>Hair Colors:</strong> {store.demo[props.match.params.theid].hair_colors}
							</li>
							<li className="list-group-item">
								<strong>Eye Colors:</strong> {store.demo[props.match.params.theid].eye_colors}
							</li>
							<li className="list-group-item">
								<strong>Average Lifespan:</strong>{" "}
								{store.demo[props.match.params.theid].average_lifespan}
							</li>
							<li className="list-group-item">
								<strong>Homeworld:</strong> {store.demo[props.match.params.theid].homeworld}
							</li>
							<li className="list-group-item">
								<strong>Language:</strong> {store.demo[props.match.params.theid].language}
							</li>
							<li className="list-group-item">
								<strong>People:</strong> {store.demo[props.match.params.theid].people}
							</li>
							<li className="list-group-item">
								<strong>Films:</strong> {store.demo[props.match.params.theid].films}
							</li>
							<li className="list-group-item">
								<strong>Created:</strong> {store.demo[props.match.params.theid].created}
							</li>
							<li className="list-group-item">
								<strong>Edited:</strong> {store.demo[props.match.params.theid].edited}
							</li>
							<li className="list-group-item">
								<strong>URL:</strong> {store.demo[props.match.params.theid].url}
							</li>
						</ul>
						<div className="card-body">
							{/* <a href="#" className="card-link">
                                    Card link
                                </a> */}

							{/* <button type="button" className="btn btn-warning">
                                    <Link to={"/single/" + here} className="btn btn-warning">
                                        Learn More!
                                    </Link>
                                </button> */}
							{/* <a href="#" className="card-link">
                                    Another link
                                </a> */}
							<div className="d-flex justify-content-between">
								<Link to={"/"} className="btn btn-warning p-2 m-2 ">
									Back to Home
								</Link>

								<Link
									to={"/single/" + (Number(props.match.params.theid) + 1)}
									className="btn btn-info p-2 m-2">
									Next Species {">>"}
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

Single.propTypes = {
	match: PropTypes.object,
	next: PropTypes.string
	// name: PropTypes.string,
	// classification: PropTypes.string,
	// designation: PropTypes.string,
	// avg_height: PropTypes.string,
	// skin_colors: PropTypes.string,
	// hair_colors: PropTypes.string,
	// eye_colors: PropTypes.string,
	// avg_lifespan: PropTypes.string,
	// homeworld: PropTypes.string,
	// language: PropTypes.string,
	// people: PropTypes.array,
	// films: PropTypes.array,
	// created: PropTypes.string,
	// edited: PropTypes.string,
	// url: PropTypes.string
};

// <div className="jumbotron">
// 	<h1 className="display-4">This will show the demo element: {store.demo[props.match.params.theid].title}</h1>

// </div>
// {store.demo[props.match.params.anything].map((item, index)
{
	/* <li className="list-group-item">Classification: {props.classification}</li>
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
							<li className="list-group-item">URL: {props.url}</li> */
}

// <div className="card-body" key={index}>
// 						<h5 className="card-title">{item.name}</h5>
// 					</div>
