import axios from "axios";

async function fetchProfileData(name){
	return await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/`);
};

export default fetchProfileData;
