import React from "react";

const ProfileInfo = ({ profile }) => {
	const { sprites, id, height, weight, types } = profile;

	return (
		<div className="container capitalize" data-testid="profile-info"> 
			<img src={sprites.front_default} alt="front-sprite" />
			<p className="lead">Id: {id}</p>
			<p className="lead">Height: {height}</p>
			<p className="lead">Weight: {weight}</p>
			<p className="lead">Type: {types && types.map(type => type.type.name + " ")}</p>
		</div>
	);
};

export default ProfileInfo;
