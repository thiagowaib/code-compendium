import React from 'react'
import { Link } from 'react-router-dom';

import '../css/Header.css';
import Logo from '../assets/Logo.svg'

const Header = () => {
    return (
        <header>
            <img src={Logo} alt="Logo"/>
                <ul>
                    <li>
                        <Link  className="link" to="/">Início</Link>
                    </li>
                    <li>
                        <Link className="link" to="/taskpage">Tasks</Link>
                    </li>
                </ul>
        </header>
    )
}

export default Header
