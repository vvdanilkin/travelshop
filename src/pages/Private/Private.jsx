import './Private.css'
import React, {useContext, useState} from 'react';
import {customAlphabet} from "nanoid";
import {AppContext} from "../../contexts/AppContext";

export const nanoid = customAlphabet('1234567890', 10)


const CreateReview = () => {
    const {reviews, setReviews} = useContext(AppContext)
    const [title, setTitle] = useState('')
    const [name, setName] = useState('')
    const [text, setText] = useState('')
    const orders = localStorage.getItem('orders')
    const createReview = (e) => {
        e.preventDefault()
        const newReview = {
            id: Number(nanoid()),
            title: title,
            name: name,
            text: text
        }
        setReviews(prevState => [...prevState, newReview])
        setTitle('')
        setName('')
        setText('')
    }

    return (
        <>
            {orders && JSON.stringify(orders)}

        <form onSubmit={createReview} className='create-review-form'>
            <h2 className='create-review-form__title'>Your review</h2>
            <div className='create-review-form__container'>
                <label htmlFor='title-input' className='create-review-form__label'>Title</label>
                <input className='create-review-form__input' id='title-input' type="text"
                       placeholder="Enter review title"
                       required
                       value={title}
                       onChange={(e) => setTitle(e.target.value)}
                />
                <label htmlFor='title-input' className='create-review-form__label'>Name</label>
                <input className='create-review-form__input' id='name-input' type="text"
                       placeholder="Enter your full name"
                       required
                       value={name}
                       onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor='text-input' className='create-review-form__label'>Review</label>
                <textarea className='create-review-form__input' id='text-input' placeholder="Enter your review"
                          required
                          value={text}
                          onChange={(e) => setText(e.target.value)}
                />
            </div>
            <button className='create-review-form__button' type="submit">OK</button>

        </form>
        </>
    )
}

export default CreateReview;
