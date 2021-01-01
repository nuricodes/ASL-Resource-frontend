import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Hero.css'



function Hero() {
    return (

        <div className="hero-container">

            {/* <video src="https://vimeo.com/user125927561/review/472735427/ab42bf207f" autoPlay loop muted /> */}
            <h1><b>Your Language Resource</b></h1>
            <p>Find and store the quick links you need to get by</p>
            <div className="hero-btns">
                <Button className='btn' buttonStyle='btn--outline' buttonSize='btn--large'>SIGN UP TODAY</Button>

            </div>
        </div>

    )
}

export default Hero
