


import React from "react";

import { useState } from "react";
import { NavLink } from "react-router-dom"; 

import '../../styles/_LEVELS/Levels.css';

import newBac from "../../assets/images/bacnouveau.jpeg";

const Levels = () => {
    const [secondOpen, setSecondOpen] = useState(true);
    const [premOpen, setPremOpen] = useState(false);
    const [termOpen, setTermOpen] = useState(false);
    const [bacOpen, setBacOpen] = useState(false);

    const handleSecondOpen = () => {
        setSecondOpen(!secondOpen);
    }

    const handlePremOpen = () => {
        setPremOpen(!premOpen);
    }

    const handleTermOpen = () => {
        setTermOpen(!termOpen);
    }

    const handleBacOpen = () => {
        setBacOpen(!bacOpen);
    }

    return (
        <section className="lvl-sect">
            <h1>Niveaux</h1>
            
            <div id="container" className="lvl-seconde"> 
                <h3 onClick={handleSecondOpen}>Seconde<span className="text-dropdown">{secondOpen ? " ▲" : " ▼"}</span></h3>
                <p>La seconde au lycée est la première année du cycle du lycée en France, qui vise à approfondir les connaissances acquises au collège et à préparer les élèves aux études supérieures.</p>
                <h4>Organisation</h4>
                <ul>
                    <p>En classe de Seconde, les enseignements se divisent en deux catégories :</p>
                    <li>- Enseignements communs à tous les élèves</li>
                    <li>- Enseignements optionnels pour les élèves qui le souhaitent</li>
                </ul>
                {
                    secondOpen && (
                        <>
                            <h4>Enseignements Communs</h4>
                            <ul>
                                <li>- Sport (2h)</li>
                                <li>- Education Moral & Civique - EMC (18h / an)</li>
                                <li>- Français (4h)</li>
                                <li>- Histoire - Géographie (3h)</li>
                                <li>- Langue vivante A (3h)</li>
                                <li>- Langue vivante B (2h30)</li>
                                <li>- Maths (4h)</li>
                                <li>- Physique Chimie (3h)</li>
                                <li>- Sciences de la Vie & de la Terre - SVT (1h30)</li>
                                <li>- Sciences Economiques & Sociales - SES (1h30)</li>
                                <li>- Sciences Numériques & Technologiques - SNT (1h30)</li>
                            </ul>
                            <h4>Enseignements Optionnels</h4>
                            <p>En seconde, les options au lycée permettent aux élèves de découvrir de nouvelles matières et de mieux comprendre leurs intérêts et leurs compétences.</p>
                            <NavLink to="/options"><button id="option-btn">Options +</button></NavLink>
                        </>
                    )
                }
            </div>

            <div id="container" className="lvl-prem">
                <h3 onClick={handlePremOpen}>Première<span className="text-dropdown">{premOpen ? " ▲" : " ▼"}</span></h3>
                <p>La première au lycée est une étape importante dans la scolarité des élèves, car elle marque le début du cycle du baccalauréat et implique l'approfondissement des matières étudiées en seconde.</p>
                <h4>Organisation</h4>
                <ul>
                    <p>En classe de Première, les enseignements se divisent en trois catégories :</p>
                    <li>- Enseignements communs à tous les élèves</li>
                    <li>- Trois enseignements de spécialité à choisir</li>
                    <li>- Enseignements optionnels pour les élèves qui le souhaitent</li>
                </ul>
                {
                    premOpen && (
                        <>
                            <h4>Enseignements Communs</h4>
                            <ul>
                                <li>- Sport (2h)</li>
                                <li>- Enseignement Moral & Civique - EMC (18h / an)</li>
                                <li>- Enseignement scientifique (2h)</li>
                                <li>- Français (4h)</li>
                                <li>- Histoire - Géographie (3h)</li>
                                <li>- Langue vivante A (2h30)</li>
                                <li>- Langue vivante B (2h)</li>
                            </ul>
                            <h4>Enseignements de Spécialite</h4>
                            <p>Les élèves doivent choisir trois enseignements de spécialité parmi une liste de matières proposées, ce qui leur permet de se familiariser avec des domaines variés et d'approfondir leurs centres d'intérêt.</p>
                            <NavLink to="/specialities"><button id="spec-btn">Spécialités +</button></NavLink>
                            <h4>Enseignements Optionnels</h4>
                            <p>En première, les options au lycée sont souvent choisies en fonction du projet d'orientation des élèves pour l'enseignement supérieur et pour approfondir les matières qui les intéressent le plus.</p>
                            <NavLink to="/options"><button id="option-btn">Options +</button></NavLink>
                        </>
                    )
                }
            </div>

            <div id="container" className="lvl-term">
                <h3 onClick={handleTermOpen}>Terminale<span className="text-dropdown">{termOpen ? " ▲" : " ▼"}</span></h3>
                <p>La terminale est la dernière année du cycle du lycée en France, pendant laquelle les élèves préparent le baccalauréat, l'examen national qui marque la fin de leurs études secondaires et l'entrée dans l'enseignement supérieur ou le monde professionnel.</p>
                <h4>Organisation</h4>
                <ul>
                    <li>- Enseignements communs à tous les élèves</li>
                    <li>- Deux enseignements de spécialité à choisir</li>
                    <li>- Enseignements optionnels pour les élèves qui le souhaitent</li>
                </ul>
               {
                termOpen && (
                        <>
                            <h4>Enseignements communs</h4>
                            <ul>
                                <li>- Sport (2h)</li>
                                <li>- Enseignement Moral & Civique - EMC (18h / an)</li>
                                <li>- Enseignement scientifique (2h)</li>
                                <li>- Philosophie (4h)</li>
                                <li>- Histoire - Géographie (3h)</li>
                                <li>- Langue vivante A (2h)</li>
                                <li>- Langue vivante B (2h)</li>
                            </ul>
                            <h4>Enseignements de Spécialité</h4>
                            <p>Chaque élève doit conserver deux spécialités parmi les trois qu'il a choisies en classe de Première</p>
                            <NavLink to="/specialities"><button id="spec-btn">Spécialités +</button></NavLink>
                            <h4>Enseignements Optionnels</h4>
                            <p>En terminale, les options au lycée peuvent avoir une influence sur les études supérieures et la carrière professionnelle des élèves, car elles peuvent fournir une base solide pour une spécialisation ultérieure.</p>
                            <NavLink to="/options"><button id="option-btn">Options +</button></NavLink>
                        </>
                )
               }
            </div>

            <div id="container" className="bac">
                <h3 onClick={handleBacOpen}>Le Bac<span className="text-dropdown">{bacOpen ? " ▲" : " ▼"}</span></h3>
                <p>Le baccalauréat en France est une étape importante de la vie scolaire, car il marque la fin des études secondaires et l'entrée dans l'enseignement supérieur ou le monde professionnel.</p>
                {
                    bacOpen && (
                        <>
                            <p> Le baccalauréat est composé d'épreuves écrites et orales qui sont organisées en fin d'année de terminale. Cependant, les épreuves et les notes de la classe de première comptent également pour 35% de la note finale du baccalauréat, ce qui signifie que la réussite en première est déjà importante pour l'obtention du diplôme. En terminale, les épreuves et les notes comptent pour 65% du baccalauréat, ce qui souligne l'importance de cette année charnière dans la réussite du baccalauréat.</p>
                            <div id="more-info">
                                <p>Plus d'informations : <span><a target="_blank" href="https://www.education.gouv.fr/reussir-au-lycee/le-baccalaureat-general-10457">https://www.education.gouv.fr/reussir-au-lycee/le-baccalaureat-general-10457</a></span></p>
                            </div>
                            <div className="new-bac"><img src={newBac}></img></div>
                        </>
                    )
                }
            </div>
        </section>
    )
}

export default Levels;