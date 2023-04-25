


import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

import '../../styles/_SHARED/Nav.css';
import logo from '../../assets/images/cnd-logo.png';
import menu from '../../assets/images/bluehamgbuge.png';

const Navbar = () => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleMobileMenuToggle = () => {
      setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <nav className='navbar'>
            <div className="nav-logo">
                <NavLink to="/"><img alt="CND Logo" src={logo}></img></NavLink>
            </div>

            <div className={`nav-links ${mobileMenuOpen ? 'mobile-menu' : ''}`}>
                <ul>
                    <li>
                        <NavLink to="/" activeClassName="active">Accueil</NavLink>
                    </li>
                    <li>
                        <NavLink to="/events" activeClassName="active">Evenements</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" activeClassName="active">A Propos</NavLink>
                    </li>
                    <li>
                        <NavLink to="/levels" activeClassName="active">Niveaux</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" activeClassName="active">Contacter</NavLink>
                    </li>
                    <li>
                        <NavLink to="/sign" activeClassName="active">Inscriptions</NavLink>
                    </li>
                </ul>
            </div>

            <div className={`menu-hamburger ${mobileMenuOpen ? 'open' : ''}`} onClick={handleMobileMenuToggle}>
                <img src={menu}></img>
            </div>

        </nav>
    )
}

export default Navbar;