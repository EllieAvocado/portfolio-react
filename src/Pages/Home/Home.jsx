import React from 'react';
import Hero from '../../Components/Section1/Hero';
import Brand from '../../Components/Section2/Brand';
import Portfolio from '../../Components/Section3/Portfolio';
import Service from '../../Components/Section4/Service';
import About from '../../Components/Section5/About';

const Home = () => {
    return (
        <div>
            <Hero />
            <Brand />
            <Portfolio />
            <Service />
            <About />
        </div>
    );
};

export default Home;