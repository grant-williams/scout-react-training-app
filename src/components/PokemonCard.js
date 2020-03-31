import React from "react";
import { useHistory } from "react-router-dom";

const PokemonCard = ({ pokemon }) => {
	let history = useHistory();

	const handleClick = () => {
		history.push(`/pokedex/${pokemon.name}`);
	};

	return (
		<div className="pokemon capitalize" onClick={() => handleClick()} data-testid="pokemon-card">
			<p>{pokemon.name}</p>
		</div>
	);
};

export default PokemonCard;
