import React from "react";

function Favorites() {
    const items =  JSON.stringify({ ...localStorage }).replace(",", "\n ");
    const two = items.replace(/[^\w\s]/gi, " "); //remove all special characters
    const three = two.replace(/\d/g, ""); //remove all digits
    //localStorage.clear();
    return (
        <div className="favor"> 
            <div>{three}</div>
        </div>
    );
}

export default Favorites;