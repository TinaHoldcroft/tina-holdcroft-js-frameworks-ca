import React from "react";
import PropTypes from "prop-types";

function Search({ handleSearch }) {
	return ( <input placeholder="Search by name..." onChange={event => handleSearch(event)}/> );
}

Search.propTypes = { handleSearch: PropTypes.func.isRequired };

export default Search;