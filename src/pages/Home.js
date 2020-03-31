import React, { useState } from "react";
import ReviewForm from "../components/ReviewForm";

const Home = () => {
	const [reviews, setReviews] = useState([]);

	const onSubmit = data => {
		setReviews([...reviews, data]);
	};

	return (
		<div className="page-header">
			<h1 className="display-3">Home Page</h1>
			<p className="lead">This app was made for the React Training App Scout badge.</p>
			<p className="lead">Please explore the app and rate the experience below.</p>

			<ReviewForm onSubmit={onSubmit} />

			{reviews.length > 0 && <h1>Recent Reviews: </h1>}
			{reviews.length > 0 && (
				<div className="reviews">
					{reviews.map((review, index) => (
						<div key={index} className="container review">
							<h3>Rating: {review.Rating}</h3>
							<h3>Message: </h3>
							<p>{review.Message}</p>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default Home;
