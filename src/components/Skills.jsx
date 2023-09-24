import "./Skills.scss";
import SystemSecurityUpdateGoodIcon from "@mui/icons-material/SystemSecurityUpdateGood";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import React, { useState } from "react";
import data from "../data/data.js";

const Skills = () => {
	const [currentSlider, setSlider] = useState(0);

	const handleClick = (way) => {
		if (way === "left") {
			setSlider((prevSlider) =>
				prevSlider > 0 ? prevSlider - 1 : data.length - 1
			);
		} else {
			setSlider((prevSlider) =>
				prevSlider < data.length - 1 ? prevSlider + 1 : 0
			);
		}
	};

	return (
		<div className="skills" id="skills">
			<div
				className="slider"
				style={{ transform: `translateX(-${currentSlider * 100}vw)` }}
			>
				{data.map((item, index) => (
					<div className="container" key={index}>
						<div className="items">
							<div className="left">
								<div className="leftcontainer">
									<div className="imgcontainer">
										<SystemSecurityUpdateGoodIcon
											style={{ height: "35px", width: "35px" }}
										/>
									</div>
									<h1>{item.title}</h1>

									<p>{item.desc}</p>
									<span>Project {item.id}</span>
								</div>
							</div>
							<div className="right">
								<img src={item.img} alt={`Item ${index + 1}`} />
							</div>
						</div>
					</div>
				))}
			</div>
			<div className="arrows">
				{currentSlider > 0 && (
					<ArrowBackIosIcon
						className="leftarrow"
						style={{ height: "600px", color: "White", fontSize: "50px" }}
						onClick={() => handleClick("left")}
					/>
				)}
				<ArrowForwardIosIcon
					className="rightarrow"
					style={{ height: "600px", color: "White", fontSize: "50px" }}
					onClick={() => handleClick()}
				/>
			</div>
		</div>
	);
};

export default Skills;
