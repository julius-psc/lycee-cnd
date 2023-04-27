


import React from "react";

import { useState } from "react";

import '../../../styles/_ABOUT/_SUB-ABOUT/Sub-about.css';

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
                <h3 onClick={handleArtClick}>Arts Plastiques<span className="text-dropdown">{artOpen ? " ▲" : " ▼"}</span></h3>
                <p>Les Arts Plastiques permettent aux élèves de développer leur créativité et leur sensibilité artistique à travers la pratique de différentes formes d'arts visuels tels que la peinture, le dessin, la sculpture, la photographie, etc.</p>
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
                <h3 onClick={handleDgeClick}>Droits & Grands Enjeux du Monde Contemporain<span className="text-dropdown">{dgeOpen ? " ▲" : " ▼"}</span></h3>
                <p>L’enseignement de Droit et grands enjeux du monde contemporain vise à élargir les perspectives des élèves de terminale. L’objectif est de leur faire découvrir les instruments du droit –normes, institutions, métiers –, son rôle social, ainsi que la méthodologie du raisonnement juridique.</p>
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
                <h3 onClick={handleEpsClick}>Education Physique & Sport<span className="text-dropdown">{epsOpen ? " ▲" : " ▼"}</span></h3>
                <p>L'option sport vise à développer les capacités physiques, les compétences techniques et les habiletés sociales des élèves à travers la pratique d'activités sportives variées.</p>
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
                <h3 onClick={handleEclaClick}>Enseignement Conjoint des Langues Anciennes<span className="text-dropdown">{eclaOpen ? " ▲" : " ▼"}</span></h3>
                <p>L'option LCA permet aux élèves de découvrir la richesse de la culture antique à travers l'étude de textes originaux, la lecture d'œuvres littéraires, l'analyse de documents historiques et la découverte de la civilisation antique. Elle permet également de développer des compétences linguistiques et de mieux comprendre la langue française, qui est largement influencée par le latin et le grec ancien.</p>
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
                <h3 onClick={handleMathCompClick}>Maths Complémentaires<span className="text-dropdown">{mathCompOpen ? " ▲" : " ▼"}</span></h3>
                <p>L'option maths complémentaires vise à approfondir les connaissances des élèves en mathématiques, en se concentrant sur des domaines spécifiques tels que l'algèbre, la géométrie, l'analyse, les probabilités et les statistiques.</p>
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
                <h3 onClick={handleMathExpClick}>Maths Expertes<span className="text-dropdown">{mathExpOpen ? " ▲" : " ▼"}</span></h3>
                <p>l'option Maths expertes propose des cours avancés et plus exigeants que ceux proposés dans le cursus standard de mathématiques. Les élèves y étudient des domaines tels que l'algèbre avancée, l'analyse, la géométrie différentielle, la théorie des nombres, la théorie des graphes, la combinatoire et d'autres sujets mathématiques avancés.</p>
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
                <h3 onClick={handleRusseClick}>Russe<span className="text-dropdown">{russeOpen ? " ▲" : " ▼"}</span></h3>
                <p>L'option russe vise à permettre aux élèves d'apprendre la langue russe, ainsi que de découvrir la culture et la civilisation russe.</p>
                {russeOpen && (
                    <>
                        <h4>A qui s'adresse cette option ?</h4>
                        <p>Elle s'adresse aux élèves qui souhaitent développer leurs compétences linguistiques, découvrir une nouvelle culture, ou encore qui envisagent des études supérieures dans des domaines tels que les langues étrangères, les sciences politiques, l'histoire ou les relations internationales.</p>
                        <h4>Organisation</h4>
                        <ul>
                            - Vérifier avec le professeur correspondant
                        </ul>
                    </>
                )}
            </div>

            <div id="container" className="THEATRE">
                <h3 onClick={handleTheatreClick}>Théâtre<span className="text-dropdown">{theaOpen ? " ▲" : " ▼"}</span></h3>
                <p>L'option Théâtre vise à permettre aux élèves de découvrir les arts de la scène, d'approfondir leur compréhension de l'expression corporelle et verbale, et de développer leur créativité.</p>
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