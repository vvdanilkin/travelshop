import React, {useContext, useState} from 'react';
import './Login.css'
import users from "../../database/users";
import {useHistory} from 'react-router-dom';
import {AppContext} from "../../contexts/AppContext";


const Login = () => {
    const {setIsAuth} = useContext(AppContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory();


    function submitForm(e) {
        e.preventDefault()

        const user = users.find(item => item.email === email)
        if (!user) {
            return alert ('no such user')
        }
        if (user.password !== password) {
            return alert ('your password is not valid')
        }
        setIsAuth(true)
        localStorage.setItem('isAuth','true')
        history.push('/Private')

    }

    return (

        <form onSubmit={submitForm} className="form">
                <div className="form__title title-block">
                    <h2 className="title-block__title">Login</h2>
                </div>
                <div className="form__input input-block">

                    <label className="input-block__label" htmlFor="email">Email</label>
                    <input className="input-block__input" type="email" id="email" placeholder="Enter your e-mail"
                           value={email} onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form__input input-block">
                    <label className="input-block__label" htmlFor="password">Password</label>
                    <input className="input-block__input" type="password" id="password" placeholder="Enter your password"
                    value={password} onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                  <button className="button-block__button" type="submit">Enter</button>
                </form>

    );
};

export default Login;
