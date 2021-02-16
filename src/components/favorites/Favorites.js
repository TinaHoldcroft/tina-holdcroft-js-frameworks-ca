import React from "react";

function Favorites() {
    const items =  JSON.stringify({ ...localStorage });

    return (
        <div className="favor"> 
            {items}
        </div>

    );
}

export default Favorites;