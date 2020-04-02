import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProfileInfo from "../components/ProfileInfo";
import fetchProfileData from "../api/PokemonProfileAPI";

const PokemonProfile = () => {
	const [profile, setProfile] = useState(null);
	const { name } = useParams();

	useEffect(() => {
		fetchProfileData(name)
			.then(response => setProfile(response.data))
			.catch(error => console.log(error));
	}, [name]);

	return (
		<div className="page-header">
			<h1 className="display-3 capitalize" data-testid="profile-header">
				{name}
			</h1>
			{profile && <ProfileInfo profile={profile} />}
		</div>
	);
};

export default PokemonProfile;
