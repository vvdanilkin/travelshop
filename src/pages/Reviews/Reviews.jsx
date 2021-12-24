import React, {useContext} from 'react';
import Private from "../Private/Private";
import {Link} from "react-router-dom";
import './Reviews.css'
import {AppContext} from "../../contexts/AppContext";


const Reviews = () => {

    const {isAuth, setIsVisible, reviews, setReviews} = useContext(AppContext)


    const deleteReviews = (id) => {
        const res = reviews.filter(item => item.id !== id)
        setReviews(res)
    }

    const Authorize = () => {
        return (
            <div className='authorize'>
                <h3 className='authorize-title'>To create a new review, please, log in: </h3>
                <Link to="/Login">
                    <button className="authorize-button">
                        Log in
                    </button>
                </Link>
            </div>
        )
    }


    return (
        <div className='reviews-container'>
            <h2 className="reviews-container__title">Our clients' reviews</h2>
            <ul className='reviews-list'>
                {reviews.map((review) => {
                    return (
                        <li className='review-container' key={review.id}>
                            <div className='review'>
                                <h3 className='review-title'>{review.title}</h3>
                                <span className='review-name'>{review.name}</span>
                                <p className='review-text'>{review.text}</p>
                                {isAuth && <button className='review-button__delete'
                                                   onClick={() => deleteReviews(review.id)}>Delete</button>}
                            </div>
                        </li>
                    )
                })}
            </ul>
            {isAuth ? <Private reviews={reviews} setReviews={setReviews}/> : <Authorize/>}
        </div>
    );
};

export default Reviews;
