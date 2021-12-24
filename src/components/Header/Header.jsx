import React from 'react';
import './Header.css'
import {Link} from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Header = () => {


    return (

        <div className="header">
            <h1>
                <Link to="/" className="header-logo">MOSCOW TRAVEL SHOP</Link>
            </h1>
            <div className="header-navbar">
                <Navbar/>
            </div>
        </div>

    );
};

export default Header;
