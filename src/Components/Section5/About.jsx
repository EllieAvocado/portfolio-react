import React from 'react';
import './About.css'
import avatar from '../../images/about.jpg'
import Calendly from '../Calendy/Calendly';

const About = () => {
    return (
        <div className='about-me-container'>
            <h2>
                Let's Book a call, <br /> So that we can discuss about our next step:
            </h2>
            <div className="about-me-content">
                <div className="about-me-avatar">
                    <img src={avatar} alt="" />
                
                <p>
                    <strong>
                        @Khinsanity 
                    </strong>
                     : I have 2 years of hands-on experience efficiently coding websites and applications using modern PHP ,HTML, CSS, JavaScript, knowledge in Laravel and React.js along-side with IT Technical Support Experience
                </p>
              </div>
              <div className="about-me-calendar">
                <Calendly />
            </div>
            </div>
          
        </div>
    );
};

export default About;