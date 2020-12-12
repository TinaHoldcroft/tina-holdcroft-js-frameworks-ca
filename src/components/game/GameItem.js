import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function GameItem({ id, name, background_image, rating, released }) {
	return (
		<Card>
			<Card.Img variant="top" src={background_image}/>
			<Card.Body>
				<Card.Title><b>Title: </b>{name}</Card.Title>
				<Card.Title><b>Rating: </b>{rating}</Card.Title>
				<Card.Title><b>Released: </b>{released}</Card.Title>
				<Link to={"game/" + id}>
					<Button variant="secondary" block>View</Button>
				</Link>
			</Card.Body>
		</Card>
	);
}

GameItem.propTypes = {
	id: PropTypes.number.isRequired,
	rating: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	released: PropTypes.string.isRequired,
	background_image: PropTypes.string.isRequired
};

export default GameItem;