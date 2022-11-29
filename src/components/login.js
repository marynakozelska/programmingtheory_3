import React from 'react';
import {Redirect} from 'react-router-dom';

import './styles/login.css';

function Login({isLoggedIn, onLogin}) {
    if (isLoggedIn) {
        <Redirect to='profile'/>
    }

    return (
        <>
            <section className='login'>
                <h3>Login</h3>
                <form className='login-form' onSubmit={onLogin}>
                    <label htmlFor="username">username</label>
                    <input type="text" name="username" id="username"/>
                    <label htmlFor="password">password</label>
                    <input type="password" name="password" id="password"/>
                    <input type="submit" value="login"/>
                </form>

            </section>
        </>
    )
}

export default Login