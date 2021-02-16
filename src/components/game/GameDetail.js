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

    const saveFavourite = () => {
        favourite(like ? false : true);
		if (like === true) {
			localStorage.setItem('favorites', JSON.stringify(detail.name, 1));
		}
		if (like === false) {
			localStorage.setItem('favorites', "unlike");
		}
    };

	useEffect(() => {
		fetch(url)
			.then(response => response.json())
			.then(json => setDetail(json))
			.catch(error => console.log(error))
			.finally(() => setLoading(false));
	}, [url]);

	if (loading) { return <Spinner/>; }

	return (
		<div className="detail-page">
			<img alt={detail.name} className="detail-image" src={detail.background_image}/>
			<div>
				<i onClick={saveFavourite} className={like ? "fas fa-heart" : "far fa-heart"}></i>
				<h1>{detail.name}</h1>
				<div dangerouslySetInnerHTML={{ __html: detail.description }}/>
				<a target={"_blank"} rel="noreferrer" href={detail.website}> View Website</a>
			</div>
		</div>
	);
}

export default GameDetail;