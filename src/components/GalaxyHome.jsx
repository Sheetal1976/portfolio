import React from "react";
import "./GalaxyHome.scss";
import wondering from "../images/wondering.jpg";

const GalaxyHome = () => {
	return (
		<div className="Center" id="galaxy">
			<div className="left">
				<h1>Wondering</h1>
				<h2>what skill set I have ?</h2>
				<button className="visit">
					<a
						href="https://main--reliable-meerkat-012162.netlify.app/"
						target="blank"
						style={{ width: "400px", textDecoration: "none", color: "white" }}
					>
						Visit my Spider Galaxy
					</a>
				</button>

				<p>Wait till the Animation Triggers.</p>
			</div>
			<div className="right">
				<div className="centered-image">
					<img src={wondering} className="wondering" alt="wondering" />
				</div>
			</div>
		</div>
	);
};

export default GalaxyHome;
