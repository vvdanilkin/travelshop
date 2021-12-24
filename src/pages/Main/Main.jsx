import React, {useContext} from 'react';
import Tour from "../../components/Tour/Tour";
import './Main.css'
import {AppContext} from "../../contexts/AppContext";

const Main = () => {
    const {tours, onAdd} = useContext(AppContext)

    if (!tours.length) {
        return <div>
            Loading...
        </div>
    }
    return (
        <section className="section-tours">
            <h2 className="section-tours__title">Our tours</h2>
            <div className="card-container">
                {tours.map((tour) => (
                    <Tour key={tour.id} tour={tour} onAdd={onAdd}></Tour>
                ))}
            </div>
        </section>
    );
};

export default Main;
