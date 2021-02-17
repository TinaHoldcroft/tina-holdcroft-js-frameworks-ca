import React from "react";


function Favorites() {
    const allItems =  JSON.stringify({ ...localStorage }).replace(",", "\n ");
    const items = JSON.stringify({...localStorage});
    const two = items.replace(/[^\w\s]/gi, " "); //remove all special characters
    //const three = two.replace(/\d/g, ""); //remove all digits
    //localStorage.clear();

    for(var i =0; i < localStorage.length; i++) {
        const key = localStorage.key(i)
        console.log(localStorage.getItem(key));
    }

    return (
        
        <>
        <p>{two} {allItems}
        </p>

        </>
    );
} 



export default Favorites;