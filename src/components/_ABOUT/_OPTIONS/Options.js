


import React from "react";

import { useState } from "react";

import '../../../styles/_ABOUT/_SUB-ABOUT/Sub-about.css';

import artIcon from '../../../assets/images/artIcon.png';
import lawIcon from '../../../assets/images/lawIcon.png';
import sportIcon from '../../../assets/images/sportIcon.png';
import englishIcon from '../../../assets/images/englishIcon.png';
import mathsCompIcon from '../../../assets/images/mathsCompIcon.png';
import mathsExpIcon from '../../../assets/images/mathsExpIcon.png';
import russianIcon from '../../../assets/images/russianIcon.png';
import theatreIcon from '../../../assets/images/theatreIcon.png';

const Options = () => {
    const [artOpen, setArtOpen] = useState(true);
    const [dgeOpen, setDgeOpen] = useState(false);
    const [epsOpen, setEpsOpen] = useState(false);
    const [eclaOpen, setEclaOpen] = useState(false);
    const [mathCompOpen, setMathCompOpen] = useState(false);
    const [mathExpOpen, setMathExpOpen] = useState(false);
    const [russeOpen, setRusseOpen] = useState(false);
    const [theaOpen, setTheaOpen] = useState(false);

    const handleArtClick = () => {
        setArtOpen(!artOpen);
    };

    const handleDgeClick = () => {
        setDgeOpen(!dgeOpen);
    };

    const handleEpsClick = () => {
        setEpsOpen(!epsOpen);
    };

    const handleEclaClick = () => {
        setEclaOpen(!eclaOpen);
    };

    const handleMathCompClick = () => {
        setMathCompOpen(!mathCompOpen);
    };

    const handleMathExpClick = () => {
        setMathExpOpen(!mathExpOpen);
    }

    const handleRusseClick = () => {
        setRusseOpen(!russeOpen);
    }

    const handleTheatreClick = () => {
        setTheaOpen(!theaOpen);
    }

    return (
        <section className="sub-about-sect">
            <h1>Options</h1>

            <div id="container" className="ART">
            <div id="h3-header"><img id="icon" src={artIcon}></img><h3 onClick={handleArtClick}>Arts Plastiques<span className="text-dropdown">{artOpen ? " ▲" : " ▼"}</span></h3></div>
                <p>L'option arts plastiques au lycée permet aux étudiants d'explorer et de développer leur créativité à travers différentes formes d'expression artistique.</p>
                {artOpen && (
                    <>
                        <h4>A qui s'adresse cette option ?</h4>
                        <p>Elle s'adresse aux élèves qui ont un intérêt marqué pour les arts visuels et qui souhaitent développer leur créativité et leur sensibilité artistique. Elle est accessible à tous les élèves qui souhaitent explorer différentes formes d'arts visuels, qu'ils aient déjà une expérience artistique ou non.</p>
                        <h4>Organisation</h4>
                        <ul>
                            <li>- Terminales (Tale) - Lundi (16h30)</li>
                            <li>- Premières (1ère) - Mardi (16h30)</li>
                            <li>- Secondes (2nde) - Jeudi (16h30)</li>
                        </ul>
                    </>
                )}
            </div>

            <div id="container" className="DGEMC">
            <div id="h3-header"><img id="icon" src={lawIcon}></img><h3 onClick={handleDgeClick}> Droits & Grands Enjeux du Monde Contemporain<span className="text-dropdown">{dgeOpen ? " ▲" : " ▼"}</span></h3></div>
                <p>L'option DGEMC (Droit et Grands Enjeux du Monde Contemporain) au lycée offre aux élèves une compréhension approfondie des questions juridiques et sociétales actuelles.</p>
                {dgeOpen && (
                    <>
                        <h4>A qui s'adresse cette option ?</h4>
                        <p>s'adresse aux élèves intéressés par les questions de société, de politique, de droit et d'économie contemporaines. Cette spécialité vise à fournir aux élèves des connaissances approfondies sur les grands enjeux du monde actuel, ainsi que sur les mécanismes politiques, économiques et juridiques qui les sous-tendent. Elle est destinée aux élèves qui souhaitent se familiariser avec les débats et les enjeux de notre temps, qui veulent comprendre les processus de mondialisation, les questions de développement durable, les relations internationales, les conflits géopolitiques, les enjeux migratoires, les politiques publiques, etc.</p>
                        <h4>Organisation</h4>
                        <p>- Cours à distance tout au long de l'année</p>
                    </>
                )}
            </div>

            <div id="container" className="EPS">
            <div id="h3-header"><img id="icon" src={sportIcon}></img><h3 onClick={handleEpsClick}> Sport<span className="text-dropdown">{epsOpen ? " ▲" : " ▼"}</span></h3></div>
                <p>L'option EPS (Éducation Physique et Sportive) au lycée permet aux élèves de développer leurs compétences physiques, leur esprit d'équipe et leur bien-être à travers la pratique d'activités sportives variées.</p>
                {epsOpen && (
                    <>
                        <h4>A qui s'adresse cette option ?</h4>
                        <p>Cette option s'adresse à tous les élèves, quel que soit leur niveau d'aptitude physique ou leur expérience sportive antérieure. Elle est accessible à tous les élèves qui souhaitent améliorer leur santé, leur condition physique et leur bien-être, ainsi que leur confiance en soi et leur esprit d'équipe.</p>
                        <h4>Organisation</h4>
                        <ul>
                            <li>Premières / Terminales - Mardi (16h30 - 19h10)</li>
                            <li>Secondes - Jeudi (16h30 - 19h10)</li>
                        </ul>
                        <table>
                            <thead>
                                <tr>
                                    <td>Niveau</td>
                                    <td>Activités Sportives</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Seconde</td>
                                    <td>Hand / Badminton</td>
                                </tr>
                                <tr>
                                    <td>Première</td>
                                    <td>Badminton / Musculation OU Hand / Musculation</td>
                                </tr>
                                <tr>
                                    <td>Terminale</td>
                                    <td>Badminton / Musculation OU Hand / Musculation</td>
                                </tr>
                            </tbody>
                        </table>
                    </>
                )}
            </div>

            <div id="container" className="ECLA">
            <div id="h3-header"><img id="icon" src={englishIcon}></img><h3 onClick={handleEclaClick}> Enseignement Conjoint des Langues Anciennes<span className="text-dropdown">{eclaOpen ? " ▲" : " ▼"}</span></h3></div>
                <p>L'option ECLA (Enseignements de Complément de Langue et de Culture d'Antiquité) au lycée propose l'étude approfondie des langues anciennes, telles que le latin et le grec, ainsi que leur culture.</p>
                {eclaOpen && (
                    <>
                        <h4>A qui s'adresse cette option ?</h4>
                        <p>Elle s'adresse aux élèves qui s'intéressent à l'histoire, à la littérature et à la civilisation antique, ainsi qu'à ceux qui souhaitent améliorer leurs compétences en lecture, en compréhension et en analyse de textes. Cette option peut également être utile pour les élèves qui envisagent de poursuivre des études dans les domaines de la philologie, de la littérature, de l'histoire, de la philosophie ou des sciences humaines en général.</p>
                        <h4>Organisation</h4>
                        <ul>
                            <li>- Seconde (2nde) : 3h / semaine</li>
                            <li>- Première (1ère) : 3h / semaine</li>
                            <li>- Terminale (Tale) : 3h / semaine</li>
                        </ul>
                    </>
                )}
            </div>

            <div id="container" className="MATHSCOMP">
                <div id="h3-header"><img id="icon" src={mathsCompIcon} ></img><h3 onClick={handleMathCompClick}>Maths Complémentaires<span className="text-dropdown">{mathCompOpen ? " ▲" : " ▼"}</span></h3></div>
                <p>L'option maths complémentaires au lycée offre aux élèves la possibilité d'approfondir leurs connaissances en mathématiques en se concentrant sur des sujets spécifiques et des applications pratiques.</p>
                {mathCompOpen && (
                    <>
                        <h4>A qui s'adresse cette option ?</h4>
                        <p>Elle s'adresse aux élèves qui ont suivi la spécialité mathématiques en première et ne veulent pas continuer à suivre cette spécialité en terminale mais qui ont cependant besoin de compléter leurs connaissances mathématiques parce qu’ils visent une poursuite d’étude dans l’enseignement supérieur où des connaissances mathématiques sont nécessaires.</p>
                        <h4>Organisation</h4>
                        <ul>
                            <li>- Terminale (Tale) : 3h / semaine</li>
                        </ul>
                    </>
                )}  
            </div>

            <div id="container" className="MATHSEXP">
            <div id="h3-header"><img id="icon" src={mathsExpIcon}></img><h3 onClick={handleMathExpClick}> Maths Expertes<span className="text-dropdown">{mathExpOpen ? " ▲" : " ▼"}</span></h3></div>
                <p>L'option maths expertes au lycée permet aux élèves passionnés de mathématiques d'explorer des concepts avancés et des problèmes complexes, les préparant ainsi à des études supérieures exigeantes dans ce domaine.</p>
                {mathExpOpen && (
                    <>
                        <h4>A qui s'adresse cette option ?</h4>
                        <p>Elle est destiné aux élèves qui visent des formations où les mathématiques occupent une place essentielle (Classes Préparatoires aux Grandes Ecoles, prépas intégrées, licence de mathématiques ou de physique, etc.) ou tout simplement aux élèves qui aiment les mathématiques.</p>
                        <h4>Organisation</h4>
                        <ul>
                            <li>- Terminale (Tale) : 3h / semaine</li>
                        </ul>
                    </>
                )}
            </div>

            <div id="container" className="RUSSE">
            <div id="h3-header"><img src={russianIcon} id="icon"></img><h3 onClick={handleRusseClick}>Russe<span className="text-dropdown">{russeOpen ? " ▲" : " ▼"}</span></h3></div>
                <p>L'option russe vise à permettre aux élèves d'apprendre la langue russe, ainsi que de découvrir la culture et la civilisation russe.</p>
                {russeOpen && (
                    <>
                        <h4>A qui s'adresse cette option ?</h4>
                        <p>L'option russe au lycée propose l'apprentissage de la langue russe, offrant aux élèves une ouverture sur une nouvelle culture et des opportunités linguistiques et professionnelles supplémentaires.</p>
                        <h4>Organisation</h4>
                        <ul>
                            - Vérifier avec le professeur correspondant
                        </ul>
                    </>
                )}
            </div>

            <div id="container" className="THEATRE">
            <div id="h3-header"><img src={theatreIcon} id="icon"></img><h3 onClick={handleTheatreClick}>Théâtre<span className="text-dropdown">{theaOpen ? " ▲" : " ▼"}</span></h3></div>
                <p>L'option théâtre au lycée permet aux élèves de développer leurs compétences en expression orale, en improvisation et en interprétation, tout en explorant différentes formes théâtrales et en développant leur créativité scénique.</p>
                {theaOpen && (
                    <>
                        <h4>A qui s'adresse cette option ?</h4>
                        <p>Elle est destinée aux élèves qui ont un intérêt pour le théâtre, la danse, le cinéma ou encore l'expression artistique en général. Elle peut également être choisie par les élèves qui souhaitent améliorer leur confiance en eux et leur aisance à s'exprimer en public.</p>
                        <h4>Organisation</h4>
                        <ul>
                            <li>- 3h / semaine</li>
                        </ul>
                    </>
                )}
            </div>
        </section>
    )
}

export default Options;