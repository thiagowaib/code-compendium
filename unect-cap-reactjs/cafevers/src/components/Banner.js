import React from 'react'

import '../css/Banner.css';
import BannerImg from '../assets/Banner.jpg';

const Banner = () => {
    return (
        <article id="Banner">
            <img src={BannerImg} alt="Banner"/>
            <h1>Welcome to Coffevers</h1>
            <h2>we like coffee</h2>
        </article>
    )
}

export default Banner;
