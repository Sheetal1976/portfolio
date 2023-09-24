import React from "react";
import "./Intro.scss";
import ape from "../images/apetrans.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Intro = () => {
	const [text] = useTypewriter({
		words: ["React Developer", "Web Designer", "Full-Stack Dev"],
		loop: true,
		delaySpeed: 1500,
		typeSpeed: 80,
		deleteSpeed: 30,
		cursor: true,
	});

	const handleClick = () => {};

	return (
		<div className="Intro" id="intro">
			<div className="left">
				<div className="ImgContainer">
					<img src={ape} alt="ape" />
				</div>
			</div>
			<div className="right">
				<div className="wrapper">
					<h2>Hi there, my name is</h2>
					<h1>Nakul Joshi</h1>
					<h3>
						I'm <span>{text}</span>
						<Cursor />
					</h3>
					<a href="#portfolio">
						<ExpandMoreIcon
							className="anchor"
							onClick={handleClick}
							style={{ width: "80px", height: "80px", color: "black" }}
						/>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Intro;
