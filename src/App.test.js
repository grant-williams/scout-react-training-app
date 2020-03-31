import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render } from "@testing-library/react";
import App from "./App";

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
