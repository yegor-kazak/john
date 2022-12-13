import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className='header'>
        <div className="container">
            <menu className='header__menu'>
                <NavLink to="/" className="header__link">Home</NavLink>
                <NavLink to="/blog" className="header__link">Blog</NavLink>
                <NavLink to="/works" className="header__link">Works</NavLink>
            </menu>
        </div>
    </header>
  );
}

export default Header;