import React, {useContext} from "react";
import './Navbar.css';
import {Link} from "react-router-dom";
import {AppContext} from "../../contexts/AppContext";

const Navbar = () => {
    const {isAuth} = useContext(AppContext)
    const publicLinks = [
        {
            to: "/",
            text: 'Home'
        },
        {
            to: "/about",
            text: 'About'
        },
        {
            to: "/contacts",
            text: 'Contacts'
        },
        {
            to: "/reviews",
            text: 'Reviews'
        },
        {
            to: "/login",
            text: 'Log in'
        },
        {
            to: "/cart",
            text: 'Cart'
        },
    ]
    const privateLinks = [
        {
            to: "/",
            text: 'Home'
        },
        {
            to: "/about",
            text: 'About'
        },
        {
            to: "/contacts",
            text: 'Contacts'
        },
        {
            to: "/reviews",
            text: 'Reviews'
        },
        {
            to: "/private",
            text: 'Private'
        },
        {
            to: "/cart",
            text: 'Cart'
        },
    ]
    const res = isAuth ? privateLinks : publicLinks
    return (
        <div className="navbar">
            {res.map((link) => {
                return (
                    <Link key={link.to}
                          to={link.to}
                          className="navbar-item"
                    >{link.text}
                    </Link>
                )
            })}
        </div>
    );
};

export default Navbar;
