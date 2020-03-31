import React, { useState, useEffect } from "react";
import axios from "axios";
import PokemonCard from "../components/PokemonCard";

const Pokedex = () => {
	const [pokemonList, setPokemonList] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetchPokemonData();
	}, []);

	const fetchPokemonData = () => {
		setLoading(true);
		axios
			.get("https://pokeapi.co/api/v2/pokemon/?limit=151")
			.then(response => {
				setPokemonList(response.data.results);
			})
			.catch(error => {
				throw error;
			})
			.finally(() => setLoading(false));
	};

	return (
		<div className="page-header">
			<h1 className="display-3" data-testid="pokedex-header">
				Pokedex Page
			</h1>
			<p className="lead">This page has all Pokemon from the first generation.</p>

			{loading ? (
				<p>Loading...</p>
			) : pokemonList.length > 0 ? (
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