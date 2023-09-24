import React from "react";
import { ReactComponent as WorkIcon } from "../images/work.svg";
import { ReactComponent as SchoolIcon } from "../images/school.svg";
import "./Timeline.scss";
import timeData from "../data/timeData";

import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
	let workIconStyles = { background: "#06D6A0" };
	let schoolIconStyles = { background: "#f9c74f" };

	return (
		<section className="about" id="timeline">
			<h1 className="title" style={{ textAlign: "center", fontSize: "2em" }}>
				Timeline
			</h1>
			<VerticalTimeline>
				{timeData.map((element) => {
					let isWorkIcon = element.icon === "work";

					return (
						<VerticalTimelineElement
							key={element.key}
							date={element.date}
							dateClassName="date"
							iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
							icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
						>
							<h3 className="vertical-timeline-element-title">
								{element.title}
							</h3>
							<h5 className="vertical-timeline-element-subtitle">
								{element.location}
							</h5>
							<p id="description">{element.description}</p>
						</VerticalTimelineElement>
					);
				})}
			</VerticalTimeline>
		</section>
	);
};

export default About;
