import React from 'react';
import Tour from "../components/Tour";
import './Main.css'

const Main = (props) => {
const {tours, onAdd} = props;
    return (

        <section className="section-tours">
            <h2 className="section-tours__title">Our tours</h2>
            <div className="card-container">
                {tours.map((tour) =>(
                    <Tour key={tour.id} tour={tour} onAdd={onAdd}></Tour>
                ))}
            </div>
        </section>

    );
};

export default Main;