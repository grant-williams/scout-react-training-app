import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import PokemonCard from "./components/PokemonCard";
import ProfileInfo from "./components/ProfileInfo";
import ReviewForm from "./components/ReviewForm";

test("renders links on nav bar", () => {
	const history = createMemoryHistory();
	const { getByTestId } = render(
		<Router history={history}>
			<App />
		</Router>
	);
	const homeLink = getByTestId("home-link");
	const pokedexLink = getByTestId("pokedex-link");

	expect(homeLink).toBeInTheDocument();
	expect(pokedexLink).toBeInTheDocument();
});

test("routes to Pokedex page", () => {
	const history = createMemoryHistory();
	history.push("/pokedex");
	const { getByTestId } = render(
		<Router history={history}>
			<App />
		</Router>
	);
	const pokedexHeader = getByTestId("pokedex-header");

	expect(pokedexHeader).toBeInTheDocument();
});

test("landing on a bad page shows NotFound page", () => {
	const history = createMemoryHistory();
	history.push("/some/bad/route");
	const { getByTestId } = render(
		<Router history={history}>
			<App />
		</Router>
	);
	const notFound = getByTestId("not-found");

	expect(notFound).toBeInTheDocument();
});

test("PokemonCard renders and redirects", () => {
	const pokemon = {
		name: "bulbasaur",
		url: "https://pokeapi.co/api/v2/pokemon/1/"
	};
	const history = createMemoryHistory();
	history.push("/pokedex");
	const { getByTestId } = render(
		<Router history={history}>
			<PokemonCard pokemon={pokemon} />
		</Router>
	);
	const pokemonCard = getByTestId("pokemon-card");

	expect(pokemonCard).toBeInTheDocument();

	fireEvent.click(pokemonCard);

	expect(history.location === "/pokedex/bulbasaur");
});

test("ProfileInfo renders", () => {
	const profile = {
		sprites: {
			front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
		},
		id: 1,
		height: 7,
		weight: 69,
		types: [
			{ slot: 1, type: { name: "grass" } },
			{ slot: 2, type: { name: "poison" } }
		]
	};

	const { getByTestId } = render(<ProfileInfo profile={profile} />);
	const profileInfo = getByTestId("profile-info");

	expect(profileInfo).toBeInTheDocument();
});

test("ReviewForm renders", () => {
	const { getByTestId } = render(<ReviewForm onSubmit={() => {}} />);
	const reviewForm = getByTestId("review-form");

	expect(reviewForm).toBeInTheDocument();
});
