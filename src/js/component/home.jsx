import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { CardRow } from "./CardRow";
import { Navbar } from "./Navbar";
import { Card } from "./Card";
import { Jumbotron } from "./Jumbotron";
import { Footer } from "./Footer";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<div className="max-w-7xl m-auto">
			<Jumbotron />
			<CardRow>
				<Card />
				<Card />
				<Card />
				<Card />
			</CardRow>
			</div>
			<Footer />
		</>
	);
};

export default Home;
