import React from "react";
import './Navbar.css';
import {Link} from "react-router-dom";

const Navbar = (props) => {
    const{countCartItems} = props;

    return (
        <div className="navbar">
            <Link to="/" className="navbar-item">Home</Link>
            <Link to="/about" className="navbar-item">About</Link>
            <Link to="/contacts" className="navbar-item">Contacts</Link>
            <Link to="/reviews" className="navbar-item">Reviews</Link>
            <Link to="/cart" className="navbar-item">
            Cart{' '}
            {props.countCartItems ? (
                <button className="badge">{props.countCartItems}</button>
            ) : (
                ''
            )}
        </Link>{' '}
            <Link to="/login" className="navbar-item">Log in</Link>

        </div>
    );
};

export default Navbar;