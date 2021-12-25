import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {AppContext} from "../contexts/AppContext";
import './DetailedProductPage.css'

const DetailProductPage = () => {
    const params = useParams()
    const {tourId} = params
    const {tours, onAdd} = useContext(AppContext)
    const [tour, setTour] = useState()
    console.log("tourId", tourId)
    useEffect(() => {
        const res = tours.find((item) => item.id == tourId)
        if (res) {
            setTour(res)
        }
    }, [])

    if (!tour) {
        return null
    }

    const {image, name, subtitle, price, text, dates} = tour

    return (
          <section>
            <div className='product-container'>
                <div className='product'>
                    <h2 className='product__title'>{name}</h2>
                    <img className='product__image' src={image} alt={name}/>
                    <h3 className='product__subtitle'>{subtitle}</h3>
                    <p className='product__text'>{text}</p>
                </div>
                <div className='product__menu'>
                    <p className='product__price'>${price}</p>
                    <button className="product__button" onClick={() => onAdd(tour)}>Add to cart</button>
                    <p className='product__dates'>{dates}</p>
                </div>
            </div>
          </section>
    );
};

export default DetailProductPage;
