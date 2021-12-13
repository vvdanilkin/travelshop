import React from "react";
import './Navbar.css';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/" className="navbar-item">Home</Link>
            <Link to="/about" className="navbar-item">About</Link>
            <Link to="/contacts" className="navbar-item">Contacts</Link>
            <Link to="/reviews" className="navbar-item">Reviews</Link>
            <Link to="/login" className="navbar-item">Log in</Link>
            <Link to="/cart" className="navbar-item">Cart</Link>
        </div>
    );
};

export default Navbar;