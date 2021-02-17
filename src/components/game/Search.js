import React from "react";
import PropTypes from "prop-types";

function Search({ handleSearch }) {
	return ( 
		<div  className="search-container">
			<input type="text"  title="Search" placeholder="Search by name..." onChange={event => handleSearch(event)}/> 
			<div class="search-icon"></div>
		</div>
	);
}

Search.propTypes = { handleSearch: PropTypes.func.isRequired };

export default Search;