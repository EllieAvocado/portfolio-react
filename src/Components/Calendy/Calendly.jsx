import React from 'react';
import './Calendly.css'
import {InlineWidget} from 'react-calendly'

const Calendly = () => {
    return (
        <div className='calendar-container'>
          
            <InlineWidget url="https://calendly.com/khinsanitydevilgreen23/career-interview?hide_event_type_details=1&hide_gdpr_banner=1&background_color=1a1a1a&text_color=f4f4f4&primary_color=ed0714" />
        </div>
    );
};

export default Calendly;