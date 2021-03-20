import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Header from "./header";
import Search from "./search";
import Character from "./character";

const RM_API_URL = "https://rickandmortyapi.com/api/character";

const Home = () => {
	const [loading, setLoading] = useState(true);
	const [characters, setCharacters] = useState([]);
	const [errorMessage, setErrorMessage] = useState(null);

	useEffect(() => {
		fetch(RM_API_URL)
			.then(response => response.json())
			.then(jsonResponse => {
				setCharacters(jsonResponse.results);
				setLoading(false);
			});
	}, []);

	const search = value => {
		setLoading(true);
		setErrorMessage(null);
		fetch(`${RM_API_URL}/?name=${value}`)
			.then(response => response.json())
			.then(jsonResponse => {
				if (jsonResponse.info.count > 0) {
					setCharacters(jsonResponse.results);
					setLoading(false);
				} else {
					setErrorMessage(jsonResponse.error);
					setLoading(false);
				}
			});
	};

	return (
		<div className="App">
			<Header text="Search with Rick and Morty with Hooks" />
			<Search search={search} />
			<p className="intro">
				Busca tus personajes favoritos de Rick and Morty
			</p>
			<div className="characters">
				{loading && !errorMessage ? (
					<span>Cargando...</span>
				) : errorMessage ? (
					<div className="error">{errorMessage}</div>
				) : (
					characters.map((character, index) => (
						<Character
							key={`${index}-${character.name}`}
							character={character}
						/>
					))
				)}
			</div>
		</div>
	);
};

export default Home;
