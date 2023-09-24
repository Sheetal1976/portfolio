import React from "react";
import "./TopBar.scss";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const TopBar = ({ isOpen, setIsOpen }) => {
	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className={`topbar ${isOpen ? "active" : ""}`}>
			<div className="wrapper">
				<div className="left">
					<a href="#intro" className="logo">
						Joshi.dev
					</a>

					<div className="Itemcontainer">
						<EmailIcon className="icons" />
						<span>nakuljoshi7670@gmail.com</span>
					</div>
					<div className="Itemcontainer">
						<PersonIcon className="icons" />
						<span>+1 647-936-7670</span>
					</div>
				</div>
				<div className="right">
					<div className="hamburger" onClick={toggleMenu}>
						{isOpen ? (
							<CloseIcon className="Menu" />
						) : (
							<MenuIcon className="Menu" />
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default TopBar;
