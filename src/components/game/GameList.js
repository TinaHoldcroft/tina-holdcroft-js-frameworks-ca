import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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

	if (loading) { return <Spinner animation="border" className="spinner"/>; }

	return (
		<>
			<Search handleSearch={filterCards}/>
			<Row>
				{filteredGames.map(game => {
					const { id, name, background_image, rating, released } = game;
					return (
						<Col sm={6} md={3} key={id}>
							<GameItem id={id} name={name} background_image={background_image} rating={rating} released={released}/>
						</Col>
					)
				;})}
			</Row>
		</>
	);
}

export default GameList;