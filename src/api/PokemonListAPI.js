import axios from "axios";

async function fetchPokemonData() {
	return await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151");
}

export default fetchPokemonData;
