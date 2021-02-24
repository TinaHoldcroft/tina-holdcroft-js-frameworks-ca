import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import favicon from "../images/dice.svg";

function Layout() {
    const handleToggle = () => { setActive(!isActive); };
    const [isActive, setActive] = useState("false");

    return (
        <>
            <Helmet><link rel="icon" href={favicon}/></Helmet>
            <div className="nav">
                <NavLink activeclassname="none" className="brand" to="/" exact>
                    <div className="lines">
                        <div className="line-one"></div>
                        <div className="line-two"></div>
                    </div>
                    <h1>Video Game<br/><span>Database</span></h1>
                </NavLink>
                <i activeclassname="active" onClick={handleToggle}  className={isActive ? "fas fa-bars" : "fas fa-times"}></i>
                <div className={isActive ? "nav-links--close" : "nav-links--open"}>
                    <NavLink activeclassname="active" to="/" exact className="nav-link">Games</NavLink>
                    <NavLink activeclassname="active" to="/contact" className="nav-link">Contact</NavLink>
                </div>
            </div>
        </>
    );
}

export default Layout;