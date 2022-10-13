import React from 'react';
import './Brand.css';
import slti from '../../images/brands/slti-logo.svg'
import testech from '../../images/brands/testech.svg'
import gleent from '../../images/brands/gleent.svg'
import netflix from '../../images/brands/netflix.svg'
import dot from '../../images/brands-dot.svg'

const Brand = () => {
    const brandLogoList = [slti, testech, gleent];
    return (
        <div className='brands-container'>
            <div className="brand-heading">
                <h2>I am proud to have these Company as my previous Employers</h2>
                <img src={dot} alt="" />
            </div>
            <div className="brand-logo-list">
                {brandLogoList.map((logo) => (
                    <div className="brand-logo-container">
                        <img className="brand-logo" src={logo} alt="" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Brand;