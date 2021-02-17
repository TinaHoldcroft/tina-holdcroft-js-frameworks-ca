import React from 'react'
import { NavLink } from "react-router-dom";

function Layout() {
    return (
        <div className="nav">
            <NavLink className="brand" to="/" exact>
                <div className="lines">
                    <div className="line-one"></div>
                    <div className="line-two"></div>
                </div>
                <h1>Video Game<br/><span>Database</span></h1>
            </NavLink>
            <div className="nav-links">
                <NavLink to="/" exact className="nav-link">Games</NavLink>
                <NavLink to="/contact" className="nav-link">Contact</NavLink>
                <NavLink to="/save" className="nav-link"><i className="fas fa-heart"></i></NavLink>
            </div>
        </div>
    );
}

export default Layout;