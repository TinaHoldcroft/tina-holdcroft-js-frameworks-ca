import React from "react";
import GameList from "../game/GameList";
import { Helmet } from "react-helmet";

export function Home() {
	return (
		<>
		    <Helmet><title>Home | VGD</title></Helmet>
			<GameList/>
		</>
	);
}

export default Home;