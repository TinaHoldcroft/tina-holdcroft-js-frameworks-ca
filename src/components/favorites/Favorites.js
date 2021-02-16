import React from "react";


function Favorites() {
    const allItems =  JSON.stringify({ ...localStorage }).replace(",", "\n ");
    //localStorage.clear();
   

    for(var i =0; i < localStorage.length; i++) {
        const key = localStorage.key(i)
        console.log(localStorage.getItem(key));
    }

    
    return (
        
        <>
        <p>{allItems}
        </p>

        </>
    );
} 



export default Favorites;