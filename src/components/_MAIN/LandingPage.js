


import React from 'react';

import '../../styles/_MAIN/Landing.css';
import landingImage from '../../assets/images/cnd-landing-img.jpeg';

const LandingPage = () => {
    return (
        <div className='landing-container'>
            <header className='landing'>
                <div className="overlay">
                    <h1>Diversité,<br /> Communauté,<br /> et Excellence</h1>
                    <p>Bienvenue au lycée CND!</p>
                </div>
                <div className="landing-img">
                    <img src={landingImage} alt="landing image" />
                </div>
            </header>
        </div>

    )
}

export default LandingPage;