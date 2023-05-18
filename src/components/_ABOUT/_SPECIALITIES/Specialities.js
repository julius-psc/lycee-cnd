


import React from "react";

import { useState } from "react";

import '../../../styles/_ABOUT/_SUB-ABOUT/Sub-about.css';

import hggspIcon from '../../../assets/images/hggspIcon.png';
import hlpIcon from '../../../assets/images/hlpIcon.png';
import amcIcon from '../../../assets/images/amcIcon.png';
import mathIcon from '../../../assets/images/mathsSpecIcon.png';
import physIcon from '../../../assets/images/physicsIcon.png';
import ecoIcon from '../../../assets/images/economyIcon.png';
import bioIcon from '../../../assets/images/biologyIcon.png';

const Specialities = () => {
    const [hggspOpen, setHggspOpen] = useState(true);
    const [hlpOpen, setHlpOpen] = useState(false);
    const [llceOpen, setLlceOpen] = useState(false);
    const [mathOpen, setMathOpen] = useState(false);
    const [physOpen, setPhysOpen] = useState(false);
    const [ecoOpen, setEcoOpen] = useState(false);
    const [bioOpen, setBioOpen] = useState(false);
  
    const handleHggspClick = () => {
      setHggspOpen(!hggspOpen);
    };
  
    const handleHlpClick = () => {
      setHlpOpen(!hlpOpen);
    };
  
    const handleLlceClick = () => {
      setLlceOpen(!llceOpen);
    };

    const handleMathClick = () => {
        setMathOpen(!mathOpen);
    };

    const handlePhysClick = () => {
        setPhysOpen(!physOpen);
    }

    const handleEcoClick = () => {
        setEcoOpen(!ecoOpen);
    }

    const handleBioClick = () => {
        setBioOpen(!bioOpen);
    }

    return (
        <section className="sub-about-sect">
            <h1>Spécialités</h1>

            <div id="container" className="HGGSP">
                <div id="h3-header"><img id="icon" src={hggspIcon}></img><h3 onClick={handleHggspClick}>Histoire, Géographie, Géopolitique et Sciences Politiques (HGGSP)<span className="text-dropdown">{hggspOpen ? " ▲" : " ▼"}</span></h3></div>
                <p>La spécialité HGGSP (Histoire-Géographie, Géopolitique et Sciences Politiques) au lycée permet aux élèves d'approfondir leur connaissance des événements historiques, des enjeux géopolitiques mondiaux et d'acquérir des compétences en sciences politiques.</p>
                {hggspOpen && (
                    <>
                        <h4>A qui s'adresse cette spécialité ?</h4>
                        <p>Cette spécialité s’adresse à tous les élèves désireux d’approfondir leurs connaissances dans de différents domaines (histoire, géographie, science politique, droit...) tout en développant des compétences utiles dans l'enseignement supérieur (autonomie, capacité de réflexion et d’analyse, qualité de l’expression écrite ou orale, curiosité intellectuelle...).</p>
                        <h4>Orientations en lien avec cette spécialité</h4>
                        <ul>
                            <li>- CPGE Littéraire</li>
                            <li>- Ecole de journalisme, Ecole de commerce, Concours IEP</li>
                            <li>- Université : Histoire, Géographie, Lettres, Sciences humaines, Droit, Economie</li>
                            <li>- Métiers de l’enseignement, environnement, tourisme, culture, aménagement du territoire</li>
                        </ul>
                        <h4>Contacter</h4>
                        <p>En cas de question, vous pouvez contacter l’équipe pédagogique de la spécialité à l’adresse mail suivante : <span>sbrard@elcdouvres.fr</span></p>
                    </>
                )}
            </div>
            
            <div id="container" className="HLP">
                <div id="h3-header"><img id="icon" src={hlpIcon}></img><h3 onClick={handleHlpClick}>Humanités, Littérature et Philosophie (HLP)<span className="text-dropdown">{hlpOpen ? " ▲" : " ▼"}</span></h3></div>
                <p>La spécialité HLP (Humanités, Littérature et Philosophie) au lycée invite les élèves à développer leur esprit critique, leur analyse littéraire et leur réflexion philosophique à travers l'étude d'œuvres littéraires et philosophiques majeures.</p>
                {hlpOpen && (
                    <>
                        <h4>A qui s'adresse cette spécialité ?</h4>
                        <p>Cette spécialité s’adresse à tous les élèves désireux d’approfondir leurs cultures littéraire et philosophique, d’aborder des problématiques contemporaines sous divers angles et de développer leurs capacités d’analyse et d’argumentation.</p>
                        <h4>Orientations en lien avec cette spécialité</h4>
                        <ul>
                            <li>- CPGE Littéraire</li>
                            <li>- École de journalisme, concours IEP</li>
                            <li>- Université : Lettres classiques, Lettres modernes, Philosophie, Sciences du langage, Humanités</li>
                        </ul>
                        <h4>Contacter</h4>
                        <p>En cas de question, vous pouvez contacter l’équipe pédagogique de la spécialité à l’adresse mail suivante : <span>mbartoli@elcdouvres.fr</span> </p>
                    </>
                )}
            </div>

            <div id="container" className="LLCE">
                <div id="h3-header"><img id="icon" src={amcIcon}></img><h3 onClick={handleLlceClick}>Anglais Monde Contemporain (AMC)<span className="text-dropdown">{llceOpen ? " ▲" : " ▼"}</span></h3></div>
                <p>La spécialité AMC (Anglais, Monde Contemporain) au lycée offre aux élèves l'opportunité d'approfondir leurs compétences en anglais tout en explorant les enjeux et les réalités du monde contemporain anglophone.</p>
                {llceOpen && (
                    <>
                        <h4>A qui s'adresse cette spécialité ?</h4>
                        <p>Cette spécialité s’adresse à tous les élèves désireux d’approfondir leur maîtrise de la langue et d’enrichir leur culture personnelle sur le monde anglophone. Les élèves suivant la spécialité LLCE Anglais Monde Contemporain peuvent s'inscrire à la certification Cambridge.</p>
                        <h4>Orientations en lien avec cette spécialité</h4>
                        <ul>
                            <li>- CPGE Littéraire</li>
                            <li>- École de traduction, école de commerce</li>
                            <li>- Université : licences de langues (LLCER, LEA)</li>
                            <li>- Métiers du tourisme, du commerce à l’international</li>
                        </ul>
                        <h4>Contacter</h4>
                        <p>En cas de question, vous pouvez contacter l’équipe pédagogique de la spécialité à l’adresse mail suivante : <span>tleplat@elcdouvres.fr</span></p>
                    </>
                )}
            </div>

            <div id="container" className="MATHS">
                <div id="h3-header"><img id="icon" src={mathIcon}></img><h3 onClick={handleMathClick}>Mathématiques (MATHS)<span className="text-dropdown">{mathOpen ? " ▲" : " ▼"}</span></h3></div>
                <p>La spécialité Maths (Mathématiques) au lycée permet aux élèves de développer leurs compétences en résolution de problèmes, en raisonnement logique et en modélisation mathématique, leur offrant une base solide pour les études supérieures dans les domaines scientifiques et techniques.</p>
                {mathOpen && (
                    <>
                        <h4>A qui s'adresse cette spécialité ?</h4>
                        <p>La spécialité Mathématiques est à un niveau raisonnable et s'adresse à ceux qui veulent développer leur culture mathématique et atteindre le niveau dont ils ont besoin pour réussir leurs études supérieures, qu'elles soient axées économie, social ou scientifique.</p>
                        <h4>Orientations en lien avec cette spécialité</h4>
                        <ul>
                            <li>- CPGE scientifique, commerciale</li>
                            <li>- Ecoles d’ingénieurs</li>
                            <li>- ENC, Polytechnique</li>
                            <li>- Ecoles de commerce</li>
                            <li>- Université : Mathématiques, Sciences, Economie-gestion</li>
                            <li>- DUT sciences ou sciences économiques</li>
                        </ul>
                        <h4>Contacter</h4>
                        <p>En cas de question, vous pouvez contacter l’équipe pédagogique de la spécialité à l’adresse mail suivante : <span>mheutte@elcdouvres.fr</span>  ou  <span>BobLesMaths@gmail.com</span></p>
                    </>
                )}
            </div>

            <div id="container" className="PC">
                <div id="h3-header"><img id="icon" src={physIcon}></img><h3 onClick={handlePhysClick}>Physique-Chimie (PC)<span className="text-dropdown">{physOpen ? " ▲" : " ▼"}</span></h3></div>
                <p>La spécialité Physique Chimie au lycée permet aux élèves de comprendre et d'explorer les lois fondamentales de la physique et de la chimie, en développant des compétences expérimentales et en appliquant des concepts scientifiques à des phénomènes réels.</p>
                {physOpen && (
                    <>
                        <h4>A qui s'adresse cette spécialite ?</h4>
                        <p>La spécialité physique-chimie au lycée s'adresse principalement aux élèves passionnés par les sciences, en particulier ceux qui ont une affinité pour la résolution de problèmes concrets et l'expérimentation. Cette matière est particulièrement adaptée pour les élèves qui envisagent de poursuivre des études supérieures dans les domaines scientifiques, tels que la physique, la chimie, l'ingénierie ou les sciences de la vie.</p>
                        <h4>Orientations en lien avec cette spécialité</h4>
                        <ul>
                            <li>- Ecoles d’ingénieurs</li>
                            <li>- À l’Université : Sciences physiques, Chimie, Physique, Sciences pour l'Ingénieur, Santé</li>
                            <li>- Les classes préparatoires aux grandes écoles (CPGE)</li>
                            <li>- Les BTS des secteurs de la chimie, de la physique</li>
                        </ul>
                        <h4>Contacter</h4>
                        <p>En cas de question, vous pouvez contacter l’équipe pédagogique de la spécialité à l’adresse mail suivante : <span>sdurel@elcdouvres.fr</span></p>
                    </>
                )}
            </div>

            <div id="container" className="SES">
                <div id="h3-header"><img id="icon" src={ecoIcon}></img><h3 onClick={handleEcoClick}>Sciences Economiques & Sociales (SES)<span className="text-dropdown">{ecoOpen ? " ▲" : " ▼"}</span></h3></div>
                <p>La spécialité SES (Sciences Économiques et Sociales) au lycée offre aux élèves une compréhension approfondie des enjeux économiques, sociologiques et politiques de la société, les préparant ainsi à comprendre les mécanismes sociaux et les problématiques économiques contemporaines.</p>
                {ecoOpen && (
                    <>
                        <h4>A qui s'adresse cette spécialité ?</h4>
                        <p>La spécialité SES s'adresse à tous les élèves qui ont envie de développer leur culture générale afin de comprendre le fonctionnement économique, social et politique entre les différents individus, entreprises et États du monde. Cet enseignement est également utile pour ceux qui souhaitent se spécialiser dans un domaine en lien avec la matière durant leurs études supérieures.</p>
                        <h4>Orientations en lien avec cette spécialité</h4>
                        <ul>
                            <li>Economie : Commerce, Gestion d’entreprise, Finance, Comptabilité, Banque, Assurance, Management, Ressources humaines, Marketing, Logistique, Vente, Gérant, Immobilier, Commerce international</li>
                            <li>Administration publique, privée & sociale : Droit, Carrières juridiques, Sciences Po, Institut d’Etudes Politiques, Ecole de journalisme, Aménagement du territoire, Ecole dans le social, Sociologie, Aménagement du territoire</li>
                            <li></li>
                        </ul>
                        <h4>Contacter</h4>
                        <p>En cas de question, vous pouvez contacter l’équipe pédagogique de la spécialité à l’adresse mail suivante : <span>tdubosq@elcdouvres.fr</span></p>
                    </>
                )}
            </div>

            <div id="container" className="SVT">
                <div id="h3-header"><img id="icon" src={bioIcon}></img><h3 onClick={handleBioClick}>Sciences de la Vie & de la Terre (SVT)<span className="text-dropdown">{bioOpen ? " ▲" : " ▼"}</span></h3></div>
                <p>La spécialité SVT (Sciences de la Vie et de la Terre) au lycée permet aux élèves d'explorer les sciences du vivant, de la biologie à l'écologie en passant par la géologie, et de comprendre les enjeux environnementaux et les défis liés à la préservation de la biodiversité et à la santé humaine.</p>
                {bioOpen && (
                    <>
                        <h4>A qui s'adresse cette spécialité ?</h4>
                        <p>La spécialité de SVT s'adresse principalement aux élèves qui s'intéressent à la biologie, la géologie et l'écologie. Cette matière est particulièrement adaptée pour les élèves qui envisagent de poursuivre des études supérieures dans les domaines scientifiques liés à la biologie, la médecine, la géologie, l'écologie, l'environnement ou la recherche.</p>
                        <h4>Orientations en lien avec cette spécialité</h4>
                        <ul>
                            <li>- Université, recherche, enseignement Biologiste</li>
                            <li>- Médecine, paramédical, santé et nutrition</li>
                            <li>- Sport (STAPS, enseignement, métiers du sport)</li>
                            <li>- Agronomie, agriculture, animaux</li>
                        </ul>
                        <h4>Contacter</h4>
                        <p>En cas de question, vous pouvez contacter l’équipe pédagogique de la spécialité à l’adresse mail suivante : <span>nleduc@elcouvres.fr</span>  ou  <span>njacqueline@elcdouvres.fr</span></p>
                    </>
                )}
            </div>
        </section>
    )
}

export default Specialities;