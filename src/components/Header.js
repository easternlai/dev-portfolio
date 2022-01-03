import React from 'react';
import { BrowserRouter as Router, Link, useLocation } from 'react-router-dom';
import profilePicture from '../images/profile.png';
const Header = () => {
    const location = useLocation().pathname;
    
    return (
        <div className='header'>
            <div className="header__left">
                <img className="header__left--image" src={profilePicture}/>
            </div>
            <div className="header__right">
                <div className="header__right__title">
                    <Link to="/"className="heading-1__bold header__right__title--name">EASTERN LAI</Link>
                    </div>
                <div className="header__right__nav">
                    
                    <Link to="/career" className={location=='/career' ? 'heading-2__bold header__right__nav--item' :'heading-2 header__right__nav--item'}>Career</Link>
                    <Link to="/projects" className={location=='/projects' ? 'heading-2__bold header__right__nav--item' :'heading-2 header__right__nav--item'}>Projects</Link>
                    <Link to="/about" className={location=='/about' ? 'heading-2__bold header__right__nav--item' :'heading-2 header__right__nav--item'}>About Me</Link>
                </div>
            </div>
        </div>
    )
}

export default Header;