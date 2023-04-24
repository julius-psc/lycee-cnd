


import React from 'react';

import '../../styles/_MAIN/Landing.css';
import landingImage from '../../assets/images/cnd-landing-img.jpeg';

const LandingPage = () => {
    return (
        <header className='landing'>
            <div className="landing-img">
                <img src={landingImage} alt="landing image" />
            </div>
            <div className="landing-txt">
                <h1>Diversité,<br /> Communauté<br /> et Excellence</h1>
                <p>L'éducation dans un environnement de bienveillance et de collectivité de la Seconde jusqu'à la Terminale.</p>
                <h3>Bienvenue au Lycée CND!</h3>
            </div>
        </header>
    )
}

export default LandingPage;