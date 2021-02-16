
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import React, { useState } from "react";

function GameItem({ id, name, background_image, rating, released }) {
	const [like, favourite] = useState(false);
    const saveFavourite = () => {
        favourite(like ? false : true);
		if (like === false) {
			localStorage.setItem(id, JSON.stringify(name));
		}
		if (like === true) {
			localStorage.removeItem(id, JSON.stringify(name));
		}
    };

	return (
		<div className="card">
			<img alt={name} src={background_image}/>
			<div>
			<i onClick={saveFavourite} className={like ? "fas fa-heart" : "far fa-heart"}></i>
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