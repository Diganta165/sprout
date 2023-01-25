import React, { useState } from 'react';
import "./Header.css"
const Header = () => {
    let [isSidebar, setIsSidebar] = useState(false);

    const sidebarHandler = () =>{
        setIsSidebar(!isSidebar);
    };

    return (
        <>
            {/* try { */}
            <div className='header_section'>
                <div className='header_business_logo_wrapper'>
                    <img src='https://www.clipartmax.com/png/middle/151-1517829_designs-for-business-logos-portland-logo-design-services-design.png' />
                </div>
                <div className='breadcrumb' onClick={sidebarHandler}>
                    {/* <span class="hamburger_icon" id="hamburger_icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 22 18">
                            <g id="Icon" transform="translate(-21 -66)">
                                <g id="Shape_1" data-name="Shape 1" transform="translate(21 66)" stroke="#000" strokeWidth="1" style="stroke: rgb(255, 255, 255);">
                                    <rect width="22" height="2" stroke="none"></rect>
                                    <rect x="0.5" y="0.5" width="21" height="1" fill="none"></rect>
                                </g>
                                <g id="Shape_2" data-name="Shape 2" transform="translate(21 74)" stroke="#000" strokeWidth="1" style="stroke: rgb(255, 255, 255);">
                                    <rect width="17" height="2" stroke="none"></rect>
                                    <rect x="0.5" y="0.5" width="16" height="1" fill="none"></rect>
                                </g>
                                <g id="Shape_3" data-name="Shape 3" transform="translate(21 82)" stroke="#000" strokeWidth="1" style="stroke: rgb(255, 255, 255);">
                                    <rect width="22" height="2" stroke="none"></rect>
                                    <rect x="0.5" y="0.5" width="21" height="1" fill="none"></rect>
                                </g>
                            </g>
                        </svg>
                    </span> */}
                    <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 9.25C2.69036 9.25 3.25 8.69036 3.25 8C3.25 7.30964 2.69036 6.75 2 6.75C1.30964 6.75 0.75 7.30964 0.75 8C0.75 8.69036 1.30964 9.25 2 9.25Z" fill="black"/>
                        <path d="M22.075 6.75H6.925C6.27607 6.75 5.75 7.27606 5.75 7.925V8.075C5.75 8.72394 6.27607 9.25 6.925 9.25H22.075C22.7239 9.25 23.25 8.72394 23.25 8.075V7.925C23.25 7.27606 22.7239 6.75 22.075 6.75Z" fill="black"/>
                        <path d="M22.075 13H1.925C1.27607 13 0.75 13.5261 0.75 14.175V14.325C0.75 14.9739 1.27607 15.5 1.925 15.5H22.075C22.7239 15.5 23.25 14.9739 23.25 14.325V14.175C23.25 13.5261 22.7239 13 22.075 13Z" fill="black"/>
                        <path d="M22.075 0.5H1.925C1.27607 0.5 0.75 1.02607 0.75 1.675V1.825C0.75 2.47393 1.27607 3 1.925 3H22.075C22.7239 3 23.25 2.47393 23.25 1.825V1.675C23.25 1.02607 22.7239 0.5 22.075 0.5Z" fill="black"/>
                    </svg>

                </div>

                {
                    isSidebar && <div className='sidebar_wrapper'>
                        <li className='navigation_element'>Home</li>
                        <li className='navigation_element'>Cart</li>
                        <li className='navigation_element'>Wishlist</li>
                    </div>
                }
            </div>  
            {/* }catch(error){console.log(error)} */}
        </>
    );
};

export default Header;