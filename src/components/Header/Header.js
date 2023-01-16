import React from 'react';
import "./Header.css"
const Header = () => {
    return (
        <>
            <div className='header_section'>
                <div className='header_business_logo_wrapper'>
                    <img src='https://www.clipartmax.com/png/middle/151-1517829_designs-for-business-logos-portland-logo-design-services-design.png' />
                </div>
                <div className='breadcrumb'>
                    <span className='line_1'></span>
                    <span className='line_2'></span>
                    <span className='line_3'></span>
                </div>
            </div>  
        </>
    );
};

export default Header;