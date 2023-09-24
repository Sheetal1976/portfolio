import Contact from "./components/Contact";
import Intro from "./components/Intro";
import TopBar from "./components/TopBar";
import "./App.scss";
import Menu from "./components/Menu";
import { useState } from "react";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import GalaxyHome from "./components/GalaxyHome";

function App() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="App">
			<TopBar isOpen={isOpen} setIsOpen={setIsOpen} />
			<Menu isOpen={isOpen} setIsOpen={setIsOpen} />
			<div className="sections">
				<Intro />
				<Timeline />
				<Skills />
				<GalaxyHome />
				<Contact />
			</div>
		</div>
	);
}

export default App;
