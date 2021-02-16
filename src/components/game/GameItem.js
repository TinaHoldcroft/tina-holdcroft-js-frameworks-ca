
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import React from "react";

function GameItem({ id, name, background_image, rating, released }) {


	return (
		<div className="card" key={id}>
			<img alt={name} src={background_image}/>
			<div>
				<p><b>Title: </b>{name}</p>
				<p><b>Rating: </b>{rating}</p>
				<p><b>Released: </b>{released}</p>
				<Link to={"game/" + id}><button>View</button></Link>		
			</div>
		</div>
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