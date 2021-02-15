import React from 'react'
import { NavLink } from "react-router-dom";
import logo from "../images/dice.svg";

function Layout() {
    return (
        <div>
            <NavLink to="/" exact>
                <h1>Video Game Database</h1>
                <img width="30" height="30" className="d-inline-block align-top" alt="logo" src={logo}/>
            </NavLink>
            <NavLink to="/" exact className="nav-link">Games</NavLink>
            <NavLink to="/contact" className="nav-link">Contact</NavLink>
        </div>
    );
}

export default Layout;