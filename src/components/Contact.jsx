import React from "react";
import "./Contact.scss";
import door from "../images/opening-door.png";

const Contact = () => {
	return (
		<div className="container" id="contact">
			<div className="left">
				<h2>Feel free to chat!</h2>
				<form
					className="form"
					action="https://formspree.io/f/mgejnday" // Formspree URL
					method="POST"
					target="blank"
				>
					<input
						className="email"
						placeholder="Email"
						id="email"
						type="email"
						name="email" // Each input should have a name attribute
					/>
					<textarea
						className="textarea"
						placeholder="Message"
						id="message"
						name="message" // Each input should have a name attribute
					/>
					<button type="submit">Submit</button>
				</form>
			</div>

			<div className="right">
				<img src={door} alt="door" />
			</div>
		</div>
	);
};

export default Contact;
