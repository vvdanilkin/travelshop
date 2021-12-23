import React from 'react';
import './Tour.css'
import {Link} from "react-router-dom";


const Tour = (props) => {
    const {tour, onAdd} = props;

    return (

        <div className="tour-card">
            <img className="tour-card__image" src={tour.image} alt={tour.name}/>
            <h3 className="tour-card__name">{tour.name}</h3>
            <p className="tour-card__subtitle">{tour.subtitle}</p>
            <span className="tour-card__price">${tour.price}</span>
            <div className="tour-card__buttons">
                <Link to={`/product/${tour._id}`} >
            <button className="tour-card__buttonone" onClick={() => onAdd(tour)}>More info</button>
            </Link>
                <button className="tour-card__buttontwo" onClick={() => onAdd(tour)}>Add to cart</button>
            </div>
        </div>
    );
};

export default Tour;