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
                <NavLink activeClassName="none" className="brand" to="/" exact>
                    <div className="lines">
                        <div className="line-one"></div>
                        <div className="line-two"></div>
                    </div>
                    <h1>Video Game<br/><span>Database</span></h1>
                </NavLink>
                <i activeClassName="active" onClick={handleToggle}  className={isActive ? "fas fa-bars" : "fas fa-times"}></i>
                <div className={isActive ? "nav-links--close" : "nav-links--open"}>
                    <NavLink activeClassName="active" to="/" exact className="nav-link">Games</NavLink>
                    <NavLink activeClassName="active" to="/contact" className="nav-link">Contact</NavLink>
                    <NavLink activeClassName="active" to="/save" className="nav-link"><i className="fas fa-heart"></i></NavLink>
                </div>
            </div>
        </>
    );
}

export default Layout;