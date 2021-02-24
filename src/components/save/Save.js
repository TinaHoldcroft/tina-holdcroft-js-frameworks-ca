import React, { useState } from "react";

function Favorites() {
    const items = JSON.parse(localStorage.getItem('favorites'));
    const listOne = items.slice(0, 1);
    const listTwo = items.slice(1, 2);
    const listThree = items.slice(2, 3);
    const listFour = items.slice(3, 4);
    const listFive = items.slice(4, 5);
    const listSix = items.slice(5, 6);
    const listSeven = items.slice(6, 7);
    const listEight = items.slice(7, 8);
    const listNine = items.slice(8, 9);
    const listTen = items.slice(9, 10);

    const handleToggle = () => { setActive(!isActive); };
    const [isActive, setActive] = useState("false");

    return (
        <>
            <i onClick={handleToggle}  className={isActive ? "saved-icon fas fa-heart" : "saved-icon fas fa-times"}></i>
            <div className={isActive ? "saved saved--close" : "saved saved--open"}>
                <h5>Saved</h5>
                <a target={"_blank"} rel="noreferrer" href={listOne}>{listOne} </a>
                <a target={"_blank"} rel="noreferrer" href={listTwo}>{listTwo}</a>
                <a target={"_blank"} rel="noreferrer" href={listThree}>{listThree}</a>
                <a target={"_blank"} rel="noreferrer" href={listFour}>{listFour}</a>
                <a target={"_blank"} rel="noreferrer" href={listFive}>{listFive}</a>
                <a target={"_blank"} rel="noreferrer" href={listSix}>{listSix}</a>
                <a target={"_blank"} rel="noreferrer" href={listSeven}>{listSeven}</a>
                <a target={"_blank"} rel="noreferrer" href={listEight}>{listEight}</a>
                <a target={"_blank"} rel="noreferrer" href={listNine}>{listNine}</a>
                <a target={"_blank"} rel="noreferrer" href={listTen}>{listTen}</a>
            </div>
        </>
    );
} 



export default Favorites;