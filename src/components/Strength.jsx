import React from 'react';
import './Strength.css'



const Strength = (props) => {
    const {strength} = props;


    return (

        <div className="strength-card">
            <img className="strength-card__image" src={strength.image} alt={strength.name}/>
            <h3 className="strength-card__name">{strength.name}</h3>
            <p className="strength-card__subtitle">{strength.subtitle}</p>
        </div>
    );
};

export default Strength;