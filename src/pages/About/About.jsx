import React from 'react';
import strengths from "../../database/strengths";
import Strength from "../../components/Strength";
import './About.css'

const About = () => {

    return (
        <section className="section-strength">
            <h2 className="section-strength__title">Why Moscow Travel Shop</h2>
            <div className="card-container">
                {strengths.map((strength) =>(
                    <Strength key={strength.id} strength={strength}></Strength>
                ))}
            </div>
        </section>
    );
};

export default About;
