import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ProfileInfo from "../components/ProfileInfo";

const PokemonProfile = () => {
	const [profile, setProfile] = useState(null);
	const { name } = useParams();

	useEffect(() => {
		fetchProfileData();
	}, []);

	const fetchProfileData = () => {
		axios
			.get(`https://pokeapi.co/api/v2/pokemon/${name}/`)
			.then(response => {
				setProfile(response.data);
			})
			.catch(error => {
				throw error;
			});
	};

	return (
		<div className="page-header">
			<h1 className="display-3 capitalize" data-testid="profile-header">
				{name}
			</h1>
			{loading ? <p>Loading...</p> : profile && <ProfileInfo profile={profile} />}
		</div>
	);
};

export default PokemonProfile;
