import React from 'react';
import PortfolioProjects from '../../Components/Section3/PortfolioCards/PortfolioProjects';
import './PortfolioPage.css'

const PortfolioPage = () => {
    return (
        <div className='pp-container'>
            <h1>
                Take a look at all of my projects <br /> this are all real projects on my previous experience and employers
            </h1>
            <PortfolioProjects />
        </div>
    );
};

export default PortfolioPage;