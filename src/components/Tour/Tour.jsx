import React from 'react';
import './Tour.css'
import {Link} from "react-router-dom";


const Tour = (props) => {
    const {tour, onAdd} = props;

    if (!tour) {
        return null
    }
    const {image, name, subtitle, price, id} = tour

    return (

        <div className="tour-card">
            <img className="tour-card__image" src={image} alt={name}/>
            <h3 className="tour-card__name">{name}</h3>
            <p className="tour-card__subtitle">{subtitle}</p>
            <span className="tour-card__price">${price}</span>
            <div className="tour-card__buttons">
                <Link to={`/product/${id}`}>
                    <button className="tour-card__buttonone" onClick={() => onAdd(tour)}>More info</button>
                </Link>
                <button className="tour-card__buttontwo" onClick={() => onAdd(tour)}>Add to cart</button>
            </div>
        </div>
    );
};

export default Tour;
