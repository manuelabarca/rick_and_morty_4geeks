import React from "react";

const Character = ({ character }) => {
	console.log(character);
	return (
		<div className="character">
			<h2>{character.name}</h2>
			<div>
				<img
					width="200"
					alt={`El personaje se llama: ${character.name}`}
					src={character.image}
				/>
			</div>
			<p>{`Especie: ${character.species}`}</p>
		</div>
	);
};

export default Character;
