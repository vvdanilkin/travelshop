import React from 'react';
import './Tour.css'


const Tour = (props) => {
    const {tour, onAdd} = props;

    return (

        <div className="tour-card">
            <img className="tour-card__image" src={tour.image} alt={tour.name}/>
            <h3 className="tour-card__name">{tour.name}</h3>
            <p className="tour-card__subtitle">{tour.subtitle}</p>
            <span className="tour-card__price">${tour.price}</span>
            <button className="tour-card__button" onClick={() => onAdd(tour)}>Add to cart</button>
        </div>
    );
};

export default Tour;