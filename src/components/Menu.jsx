import React from "react";
import "./Menu.scss";

const Menu = ({ isOpen, setIsOpen }) => {
	const handleMenuClick = () => {
		setIsOpen(false);
	};

	return (
		<div className={`MenuList ${isOpen ? "active" : ""}`}>
			<ul>
				<li>
					<a href="#intro" onClick={handleMenuClick}>
						Home
					</a>
				</li>
				<li>
					<a href="#timeline" onClick={handleMenuClick}>
						Timeline
					</a>
				</li>
				<li>
					<a href="#skills" onClick={handleMenuClick}>
						Projects
					</a>
				</li>
				<li>
					<a href="#galaxy" onClick={handleMenuClick}>
						Skills
					</a>
				</li>
				<li>
					<a href="#contact" onClick={handleMenuClick}>
						Contact Us
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Menu;
