import React, { useState, useEffect } from "react";
import Spinner from "../spinner/Spinner";
import GameItem from "./GameItem";
import { BASE_URL } from "../../constants/api";
import Search from "./Search";

function GameList() {
	const [games, setGames] = useState([]);
	const [filteredGames, setFilteredGames] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch(BASE_URL)
			.then(response => response.json())
			.then(json => {
				setGames(json.results);
				setFilteredGames(json.results);
			})
			.catch(error => console.log(error))
			.finally(() => setLoading(false));
	}, []);

	const filterCards = function(e) {
		const searchValue = e.target.value.toLowerCase(); // lowercase
		const filteredArray = games.filter(function(g) {
			const lowerCaseName = g.name.toLowerCase(); // lowercase
			if (lowerCaseName.includes(searchValue)) { // check if the game name begins with the search value
				return true;
			}
			return false;
		});
		setFilteredGames(filteredArray);
	};

	if (loading) { return <Spinner/>; }

	return (
		<>
			<Search handleSearch={filterCards}/>
			<div className="cards-wrapper">
				{filteredGames.map(game => {
					const { id, name, background_image, rating, released } = game;
					return (
						<GameItem key={id} id={id} name={name} background_image={background_image} rating={rating} released={released}/>
					)
				;})}
			</div>
		</>
	);
}

export default GameList;