import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Nav from "./components/Nav";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Pokedex from "./pages/Pokedex";
import PokemonProfile from "./pages/PokemonProfile";

function App() {
	return (
		<div className="App">
			<div className="App-header">
				<Nav />
			</div>

			<hr />

			<div className="App-page">
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/pokedex">
						<Pokedex />
					</Route>
					<Route path="/pokedex/:name">
						<PokemonProfile />
					</Route>
					<Route path="*">
						<NotFound />
					</Route>
				</Switch>
			</div>
		</div>
	);
}

export default App;
