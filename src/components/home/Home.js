import React from "react";
import GameList from "../game/GameList";
import { Helmet } from "react-helmet";
import Save from "../save/Save";

export function Home() {
	return (
		<>
		    <Helmet><title>Home | VGD</title></Helmet>
			<GameList/>
			<Save/>
		</>
	);
}

export default Home; 