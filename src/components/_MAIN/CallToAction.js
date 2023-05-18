


import React from "react";

import { NavLink } from "react-router-dom";

import '../../styles/_MAIN/Cta.css';
import image from '../../assets/images/cnd-main-cta.jpeg';

const CallToAction = () => {
    return (
        <section className="cta-section">

            <div className="img-section">
                <img src={image}></img>
            </div>

            <div className="txt-section">
                <h1>Qui nous sommes</h1>
                <p>Le Lycée Cours Notre Dame est un établissement d'enseignement privé catholique situé à Douvres la Délivrande, en Normandie. Fondé en 1946, il accueille des élèves de la seconde à la terminale et propose des filières générales (L, ES, S) ainsi qu'une section STMG. Il se caractérise par son engagement à offrir à ses étudiants un environnement éducatif riche et équilibré, alliant enseignement académique et épanouissement personnel à travers des activités variées.<span>Le CND favorise la formation intégrale de ses élèves, en leur proposant des activités artistiques, culturelles, sportives et spirituelles.</span></p>
                <NavLink to="/lycee-cnd/a-propos"><button>A Propos</button></NavLink>
            </div>
        </section>
    )
}

export default CallToAction;