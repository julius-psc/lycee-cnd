


import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

import '../../styles/_SHARED/Nav.css';
import logo from '../../assets/images/cnd-logo.png';

const Navbar = () => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleMobileMenuToggle = () => {
      setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <nav className='navbar'>
            <div className="nav-logo">
                <NavLink to="/accueil"><img alt="CND Logo" src={logo}></img></NavLink>
            </div>

            <div className={`nav-links ${mobileMenuOpen ? 'mobile-menu' : ''}`}>
                <ul>
                    <li>
                        <NavLink to="/accueil" activeClassName="active">Accueil</NavLink>
                    </li>
                    <li>
                        <NavLink to="/evenements" activeClassName="active">Evenements</NavLink>
                    </li>
                    <li>
                        <NavLink to="/a-propos" activeClassName="active">A Propos</NavLink>
                    </li>
                    <li>
                        <NavLink to="/niveaux" activeClassName="active">Niveaux</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contacter" activeClassName="active">Contacter</NavLink>
                    </li>
                    <li>
                        <NavLink to="/inscription" activeClassName="active">Inscriptions</NavLink>
                    </li>
                </ul>
            </div>

            <div className={`menu-hamburger ${mobileMenuOpen ? 'open' : ''}`} onClick={handleMobileMenuToggle}>
                <div class="menu-icon">
                    <div class="menu-icon-bar"></div>
                    <div class="menu-icon-bar"></div>
                    <div class="menu-icon-bar"></div>
                </div>
            </div>

        </nav>
    )
}

export default Navbar;