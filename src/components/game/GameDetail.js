import React, { useState, useEffect } from "react";
import Spinner from "../spinner/Spinner";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/api";

function GameDetail() {
	const [like, favourite] = useState(false);
	const [detail, setDetail] = useState(null);
	const [loading, setLoading] = useState(true);
	let { id } = useParams();
	const url = BASE_URL + "/" + id;

	useEffect(() => {
		fetch(url)
			.then(response => response.json())
			.then(json => setDetail(json))
			.catch(error => console.log(error))
			.finally(() => setLoading(false));
	}, [url]);

	if (loading) { return <Spinner/>; }

	const saveFavourite = () => {
		favourite(like ? false : true);
		if (like === false) {
			const favoritesFromStorage = JSON.parse(localStorage.getItem('favorites')) ?? [];
			const updatedFavorites = [...favoritesFromStorage, detail.website]
			localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
		}
		if (like === true) {
			const favoritesFromStorage = JSON.parse(localStorage.getItem('favorites')) ?? [];
			const updatedFavorites = favoritesFromStorage.filter(favorite => favorite !== detail.website);
			localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
		}
	};

	return (
		<div className="detail-page">
			<img alt={detail.name} className="detail-image" src={detail.background_image}/>
			<h3>{detail.name}</h3>
			<div className="detail-txt">
				<div className="link-wrapper">
					<i title="save website link" onClick={saveFavourite} className={like ? "fas fa-heart" : "far fa-heart"}></i>
					<a title="View website" target={"_blank"} rel="noreferrer" href={detail.website}> View Website for {detail.name}</a>
				</div>
				<div dangerouslySetInnerHTML={{ __html: detail.description }}/>
			</div>
		</div>
	);
}

export default GameDetail;