import React from 'react';
import './Hero.css'
import underline from '../../images/Vector.svg'

const Hero = () => {
    return (
        <div className='hero-container'>
            <div className="hero-content">
                <div className="hero-heading-container">
                    <h1 className="hero-heading">
                        Laravel x ReactJs Projects<span> on Going!</span>
                        <img src={underline} alt="" className='hero-heading-underline'/>
                    </h1>
                </div>
                <div className="hero-content-highlights">
                <div className="hero-cards">
                        <h2>2</h2>
                        <h5>Years of Experience</h5>
                    </div>
                    <div className="hero-cards">
                        <h2>3</h2>
                        <h5>Projects Completed </h5>
                    </div>
                    <div className="hero-cards">
                        <h2>2</h2>
                        <h5>Clients </h5>
                    </div>
                    <div className="hero-cards">
                        <h2>From 2</h2>
                        <h5>Different Countries</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;