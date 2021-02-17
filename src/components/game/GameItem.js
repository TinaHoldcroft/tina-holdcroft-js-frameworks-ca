
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import React from "react";

function GameItem({ id, name, background_image, rating, released }) {

	return (
		<div className="card" key={id}>
			<div className="card-img">
				<Link to={"game/" + id}>
					<img alt={name} src={background_image}/>
					<p>View More</p>
					<label>{name}</label>
				</Link>
			</div>
			
			<div className="info-grafics">
				<p><i className="fas fa-star"></i> {rating}</p>
				<p><i className="fas fa-birthday-cake"></i> {released}</p>	
			</div>
		</div>
	);
}

GameItem.propTypes = {
	id: PropTypes.number.isRequired,
	rating: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	released: PropTypes.string.isRequired,
	background_image: PropTypes.string.isRequired,
};

export default GameItem;