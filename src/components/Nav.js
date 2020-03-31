import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
	return (
		<ul className="flex-container space-around">
			<li className="flex-item">
				<Link to="/" className="App-link" data-testid="home-link">
					Home
				</Link>
			</li>
			<li className="flex-item">
				<Link to="/pokedex" className="App-link" data-testid="pokedex-link">
					Pokedex
				</Link>
			</li>
		</ul>
	);
};

export default Nav;
