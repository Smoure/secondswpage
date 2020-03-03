import React, { useState, useEffect } from "react";
import { Card } from "../component/card";
import { Jumbotron } from "../component/jumbotron";
import "../../styles/home.scss";
import { Link } from "react-router-dom";

export function Home() {
	const [species, setSpecies] = useState([]);

	useEffect(() => {
		fetch("https://swapi.co/api/species/")
			.then(resp => resp.json())
			.then(data => {
				console.log(data);
				setSpecies(data.results);
			});
	}, []);

	return (
		<>
			<Jumbotron />
			<div className="card-group justify-content-around ">
				{species.map((item, here) => {
					return (
						<Card
							key={here}
							name={item.name}
							// classification={item.classification}
							// designation={item.designation}
							// avg_height={item.average_height}
							// skin_colors={item.skin_colors}
							// hair_colors={item.hair_colors}
							// eye_colors={item.eye_colors}
							// avg_lifespan={item.average_lifespan}
							// homeworld={item.homeworld}
							// language={item.language}
							// people={item.people}
							// films={item.films}
							// created={item.created}
							// edited={item.edited}
							// url={item.url}
							link={here}
						/>
					);
				})}
			</div>
		</>
	);
}
