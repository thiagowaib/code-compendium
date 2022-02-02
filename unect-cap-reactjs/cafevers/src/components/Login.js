import React from 'react'

import '../css/Login.css';
import Form from './Form';

const Login = () => {
    
    return (
        <section id="Login-article">
            <h2> Are you crazy for coffee?</h2>
            <Form 
            label1='user'
            label2='password'
            btnText='login'
            />
        </section>
    )  
}

export default Login
