import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function GameItem({ id, name, image }) {
	return (
		<Card>
			<Card.Img variant="top" src={image} />
			<Card.Body>
				<Card.Title>{name}</Card.Title>
				<Link to={"game/" + id}>
					<Button variant="secondary" block>
						View
					</Button>
				</Link>
			</Card.Body>
		</Card>
	);
}

GameItem.propTypes = {
	id: PropTypes.number.isRequired,
	title: PropTypes.string,
	image: PropTypes.string,
	rating: PropTypes.number,
	releaseDate: PropTypes.string
};

export default GameItem;