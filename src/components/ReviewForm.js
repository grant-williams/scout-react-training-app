import React from "react";
import { useForm } from "react-hook-form";

const ReviewForm = ({ onSubmit }) => {
	const { register, handleSubmit, errors } = useForm({ mode: "onBlur" });

	return (
		<div className="container">
			<form className="form" onSubmit={handleSubmit(onSubmit)}>
				<label>Rating: </label>

				<div className="margin">
					<div className="rating">
						<label>
							<input
								name="Rating"
								type="radio"
								value="Terrible"
								ref={register({
									validate: value => value === "Good" || value === "Perfect",
									required: true
								})}
							/>
							Terrible
						</label>
						<label>
							<input
								name="Rating"
								type="radio"
								value="Poor"
								ref={register({
									validate: value => value === "Good" || value === "Perfect",
									required: true
								})}
							/>
							Poor
						</label>
						<label>
							<input
								name="Rating"
								type="radio"
								value="Average"
								ref={register({
									validate: value => value === "Good" || value === "Perfect",
									required: true
								})}
							/>
							Average
						</label>
						<label>
							<input
								name="Rating"
								type="radio"
								value="Good"
								ref={register({
									validate: value => value === "Good" || value === "Perfect",
									required: true
								})}
							/>
							Good
						</label>
						<label>
							<input
								name="Rating"
								type="radio"
								value="Perfect"
								ref={register({
									validate: value => value === "Good" || value === "Perfect",
									required: true
								})}
							/>
							Perfect
						</label>
					</div>
					<div className="error">
						{errors.Rating && errors.Rating.type === "validate" && (
							<span>You might want to think twice about that rating.</span>
						)}
						{errors.Rating && errors.Rating.type === "required" && <span>This field is required.</span>}
					</div>
				</div>

				<div className="margin">
					<label>Message: </label>
					<div>
						<textarea
							id="Message"
							placeholder="e.g. 10/10 would recommend."
							name="Message"
							rows={4}
							cols="50"
							ref={register({ required: true, maxLength: 200, minLength: 10 })}
						/>
					</div>

					<div className="error">
						{errors.Message && errors.Message.type === "minLength" && <span>This message is too short.</span>}
						{errors.Message && errors.Message.type === "maxLength" && <span>This message is too long.</span>}
						{errors.Message && errors.Message.type === "required" && <span>This field is required.</span>}
					</div>
				</div>

				<input type="submit" className="margin" />
			</form>
		</div>
	);
};

export default ReviewForm;
