import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import logo from "../images/dice-logo.svg";

function Layout() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <NavLink to="/" exact>
                <Navbar.Brand><img width="30" height="30" className="d-inline-block align-top" alt="logo" src={logo}/></Navbar.Brand>
            </NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink to="/" exact className="nav-link">Home</NavLink>
                    <NavLink to="/contact" className="nav-link">Contact</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Layout;