import React, { useState, useEffect } from "react";
import PokemonCard from "../components/PokemonCard";
import fetchPokemonData from "../api/PokemonListAPI";

const Pokedex = () => {
	const [pokemonList, setPokemonList] = useState([]);

	useEffect(() => {
		fetchPokemonData()
			.then(response => setPokemonList(response.data.results))
			.catch(error => console.log(error));
	}, []);

	return (
		<div className="page-header">
			<h1 className="display-3" data-testid="pokedex-header">
				Pokedex Page
			</h1>
			<p className="lead">This page has all Pokemon from the first generation.</p>

			{pokemonList.length > 0 ? (
				<div className="pokemonList">
					{pokemonList.map((pokemon, index) => (
						<PokemonCard pokemon={pokemon} key={index} />
					))}
				</div>
			) : (
				<p>No Pokemon to show.</p>
			)}
		</div>
	);
};

export default Pokedex;
