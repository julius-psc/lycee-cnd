


import React from "react";
import { useState } from "react";

import { NavLink } from "react-router-dom";

import '../../styles/_ABOUT/About.css';

function About() {
    const [educOpen, setEducOpen] = useState(true);
    const [etabOpen, setEtabOpen] = useState(false);

    const handleEducClick = () => {
        setEducOpen(!educOpen);
    };

    const handleEtabClick = () => {
        setEtabOpen(!etabOpen);
    };

    return (
        <div className="about-sect">
            <h1>A Propos</h1>
            <div id="paragraph-container">
                <h2>Bienvenue</h2>
                <p><span className="quote">"Donner leur envie de bien faire et vous aurez tout gagné"</span> - Mère Ste Marie (Fondatrice)</p>
                <p>Le Cours Notre-Dame est un lycée qui accueille tous les jeunes qui veulent se préparer pour l'avenir en respectant les valeurs de l'évangile. Ils apprendront les méthodes de réflexion et de travail nécessaires pour développer leurs compétences et connaissances, ainsi que les valeurs d'amour, de vérité et de justice qui sont importantes pour vivre en communauté. Ils apprendront également à respecter les autres et eux-mêmes.</p>
            </div>

            <div id="paragraph-container">
                <h2 onClick={handleEducClick}>Projet d'éducation<span className="text-dropdown">{educOpen ? " ▲" : " ▼"}</span></h2>
                <p>L'équipe éducative a pour mission de former chaque élève en développant son savoir, sa culture et sa personnalité. Elle utilise des méthodes pédagogiques variées et favorise une ouverture d'esprit.</p>
                {educOpen && (
                    <>
                        <p>De plus, notre objectif est :</p>
                        <ul>
                            <li><span>[+]</span>Faciliter la transition entre le collège & lycée</li>
                            <li><span>[+]</span>Enseigner des méthodes de travail efficaces</li>
                            <li><span>[+]</span>Fournir un soutien aux élèves en difficulté</li>
                            <li><span>[+]</span>Maintenir la motivation de tous les élèves</li>
                            <li><span>[+]</span>Accompagner les élèves dans leur projet</li>
                            <li><span>[+]</span>Encourager l'apprentissage de la liberté et de l'autonomie</li>
                        </ul>
                    </>
                )}
            </div>
            
            <div id="paragraph-container">
                <h2 onClick={handleEtabClick}>Projet d'établissement<span className="text-dropdown">{etabOpen ? " ▲" : " ▼"}</span></h2>
                <p>Au lycée Cours Notre-Dame, l'équipe éducative met en pratique des valeurs telles que le sens du travail, de la créativité, du respect et de l'autonomie. Elle encourage également l'esprit de solidarité, de responsabilité et d'engagement ainsi que l'écoute de l'autre et l'élaboration du projet personnel. Trois thèmes fondamentaux, basés sur ces valeurs, conditionnent la vie au lycée pour tous.</p>
                {etabOpen && (
                    <>
                        <div id="sub-para">
                            <h4>[1] Lieu de réussite</h4>
                            <p>Nous aidons nos élèves à développer leurs compétences et à trouver leur orientation, y compris avec une section européenne pour l'accès aux grandes écoles et bourses Erasmus, horaire renforcé en anglais et voyage à Bruxelles pour l'acquisition d'une citoyenneté européenne. Nous offrons un soutien personnalisé et une classe préparatoire pour consolider les prérequis, avec une priorité sur la réussite de chaque élève.</p>
                        </div>

                        <div id="sub-para">
                            <h4>[2] Lieu d'ouverture</h4>
                            <p>Nous valorisons notre lycée pour sa promotion de la vie culturelle et sportive, avec des visites enrichissantes au musée, au cinéma ou au théâtre pour développer un regard critique, des options Théâtre ou Arts plastiques pour une formation pratique et théorique, et des voyages et échanges linguistiques pour favoriser l'ouverture internationale et la compréhension d'autres cultures. Nous proposons également une pratique sportive avec la section voile ou l'option handball pour développer l'esprit d'initiative, le sens du groupe, et améliorer les compétences techniques, pouvant même faire l'objet d'épreuves au baccalauréat.</p>
                        </div>

                        <div id="sub-para">
                            <h4>[3] Lieu de vie</h4>
                            <p>Notre lycée est situé à 10 minutes de Caen, proche de la mer et dans un parc classé "Monuments Historiques". Nous proposons un internat pour filles et garçons en chambres individuelles dans un cadre de vie agréable à taille humaine, avec des activités extrascolaires telles que des sorties culturelles et sportives pour encourager l'autonomie et le développement citoyen des élèves. Les terminales ont un statut spécifique pour renforcer leur autonomie, tandis que le Trophée des Lycées et le Bureau des élèves favorisent la prise de responsabilités.</p>
                        </div>
                    </>
                )}
            </div>

            <div id="paragraph-container">
                    <h2>Horaires ⏴</h2>
                    <div>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Lundi / Mardi</td>
                                    <td>8h30 → 16h30</td>
                                </tr>
                                <tr>
                                    <td>Mercredi</td>
                                    <td>8h30 → 12h20</td>
                                </tr>
                                <tr>
                                    <td>Jeudi / Vendredi</td>
                                    <td>8h30 → 16h30</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
    )
}

/*
    <div id="container">
        <h3>Réussite Examens ⏴</h3>
        <div id="sub-container">
            <h4>BAC 2022 :</h4>
            <p>100% de réussite</p>
            <p>81% de mentions</p>
        </div>
        <div id="sub-container">
            <h4>Prépa SCIENCES PO :</h4>
            <p>2018 → 4 admis (2 REÇUS) </p>
            <p>2019 → 4 admis (1 REÇU)</p>
            <p>2020 → 4 admis (2 REÇUS)</p>
        </div>
        <div id="sub-container">
            <h4>Examens CAMBRIDGE 2019-2020 :</h4>
            <p>CAE : 3 REÇUS (100%)</p>
            <p>FCE: 13 REÇUS (92.85%)</p>
        </div>
    </div>


    <div id="container">
        <h3>Notre Lycée ⏴</h3>
        <ul>
            <li><span>[+]</span>Batiments récents inaugurés en 2014</li>
            <li><span>[+]</span>Un grand parc classé 'Monuments Historiques'</li>
            <li><span>[+]</span>Terrain multi-sports + Parking Vélos / Voitures</li>
        </ul>
    </div>


    <div id="container">
        <h3>Equipe Administrative ⏴</h3>
        <p>Attachée de direction → Christine VAL</p>
        <p>Secrétariat des élèves → Elisabeth GROSOS</p>
        <p>Comptabilité → Isabelle BRUGES</p>
        <p>Relations humaines → Axelle BOULAY</p>
        <p>Agent de maintenance → Jean-Marie HENRY</p>
    </div>


    <div id="container">
        <h3>Spécialités ⏴</h3>
        <ul>
            <li><span>[+]</span>Histoire, Géographie, Géopolitique et Science Politique (HGGSP)</li>
            <li><span>[+]</span>Humanités, littérature et philosophie (HLP)</li>
            <li><span>[+]</span>Anglais "Monde Contemporain" (AMC)</li>
            <li><span>[+]</span>Mathématiques (Maths)</li>
            <li><span>[+]</span>Physique Chimie (PC)</li>
            <li><span>[+]</span>Sciences de la Vie & de la Terre (SVT)</li>
            <li><span>[+]</span>Sciences Economiques & Sociales (SES)</li>
        </ul>
        <NavLink  to="/specialities"><button id="see-more">Voir Plus</button></NavLink>
    </div>
    <div id="container">
        <h3>Options ⏴</h3>
        <ul>
            <li><span>[+]</span>Arts Plastiques</li>
            <li><span>[+]</span>EPS (Handball, Badminton, Voile)</li>
            <li><span>[+]</span>Latin / Grec (Langues de l'Antiquité)</li>
            <li><span>[+]</span>Mathématiques complémentaires</li>
            <li><span>[+]</span>Mathématiques expertes</li>
            <li><span>[+]</span>Russe</li>
            <li><span>[+]</span>Théâtre</li>
        </ul>
        <NavLink to="/options"><button id="see-more">Voir Plus</button></NavLink>
    </div>
*/

export default About;