


import React from "react";

import '../../styles/_LEVELS/Levels.css';

const Levels = () => {
    return (
        <section className="lvl-sect">
            <h1>Niveaux</h1>
            
            <div id="container" className="lvl-seconde"> 
                <h3>Seconde</h3>
                <p>La seconde au lycée est la première année du cycle du lycée en France, qui vise à approfondir les connaissances acquises au collège et à préparer les élèves aux études supérieures.</p>
                <h4>Organisation</h4>
                <ul>
                <p>En classe de Seconde, les enseignements se divisent en deux catégories :</p>
                    <li>- Enseignements communs à tous les élèves</li>
                    <li>- Enseignements optionnels pour les élèves qui le souhaitent</li>
                </ul>
                <h4>Enseignements Communs</h4>
                <ul>
                    <li>Sport (2h)</li>
                    <li>Education Moral & Civique - EMC (18h / an)</li>
                    <li>Français (4h)</li>
                    <li>Histoire - Géographie (3h)</li>
                    <li>Langue vivante A (3h)</li>
                    <li>Langue vivante B (2h30)</li>
                    <li>Maths (4h)</li>
                    <li>Physique Chimie (3h)</li>
                    <li>Sciences de la Vie & de la Terre - SVT (1h30)</li>
                    <li>Sciences Economiques & Sociales - SES (1h30)</li>
                    <li>Sciences Numériques & Technologiques - SNT (1h30)</li>
                </ul>
            </div>

            <div id="container" className="lvl-prem">

            </div>

            <div id="container" className="lvl-term">

            </div>
        </section>
    )
}

export default Levels;