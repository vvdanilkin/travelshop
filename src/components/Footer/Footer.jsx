import React from 'react';
import "./Footer.css";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-row">
                    {/*Column1*/}
                    <div className="footer-column">
                        <h2>
                            <Link to="/" className="footer-logo">MOSCOW TRAVEL SHOP</Link>
                        </h2>
                    </div>
                    {/*Column2*/}
                    <div className="footer-column">
                        <h4>Contacts</h4>
                        <ul className="footer-list">
                            <li className="footer-list__item">12678 Moscow, Russia</li>
                            <li className="footer-list__item">17, Pokrovka street</li>
                            <li className="footer-list__item">+7-495-783-489</li>
                            <li className="footer-list__item">info@mtshop.ru</li>
                        </ul>
                    </div>
                    {/*Column3*/}
                    <div className="footer-column">
                        <h4>Quick links</h4>
                        <ul className="footer-list">
                            <li className="footer-list__item"><Link to="/about" className="footer-list__link">About</Link></li>
                            <li className="footer-list__item"><Link to="/reviews" className="footer-list__link">Reviews</Link></li>
                            <li className="footer-list__item"><Link to="/login" className="footer-list__link">Log in</Link></li>
                            <li className="footer-list__item"><Link to="/cart" className="footer-list__link">Cart</Link></li>
                        </ul>
                    </div>
                    {/*Column4*/}
                    <div className="footer-column">
                        <h4>Follow us</h4>
                        <ul className="footer-list">
                            <li className="footer-list__item"><a href="https://www.facebook.com" target="_blank" rel="noopener nofollow noreferrer" className="footer-list__link">Facebook</a></li>
                            <li className="footer-list__item"><a href="https://www.instagram.com" target="_blank" rel="noopener nofollow noreferrer" className="footer-list__link">Instagram</a></li>
                            <li className="footer-list__item"><a href="https://www.youtube.com" target="_blank" rel="noopener nofollow noreferrer" className="footer-list__link">YouTube</a></li>
                            <li className="footer-list__item"><a href="https://www.twitter.com" target="_blank" rel="noopener nofollow noreferrer" className="footer-list__link">Twitter</a></li>
                        </ul>
                    </div>
                </div>
                <hr/>
                <div className="footer-row">
                    <p className="footer-row__textline">
                        &copy;{new Date().getFullYear()} MOSCOW TRAVEL SHOP | All rights reserved | Designed by V.Danilkin
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;