import React from 'react';
import  logo from "../.././images/logo.svg"
import "./navbar.scss"
import {Link } from "react-router-dom";


function Navbar() {
    return (
        <div className="navbar">
             <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            <div className="links">
               <Link to="/about">About</Link>
                <Link to="/careers">Careers</Link>
                <Link to="/events">Events</Link>
                <Link to="/products">Products</Link>
                <Link to="/support">Support</Link>
            </div>
        </div>
    )
}

export default Navbar
