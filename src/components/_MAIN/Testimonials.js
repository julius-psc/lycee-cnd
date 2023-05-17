


import React from "react";

import '../../styles/_MAIN/Testi.css';
import { ReactComponent as QuotesIcon } from '../../assets/images/quote-left-solid.svg';

const Testimonials = () => {
    return (
        <section className="testimonial-section">
            <div className="testi-wrapper">
                <QuotesIcon className="quotes-icon"/>
                <h3>Ce lycée offre un environnement d'apprentissage exceptionnel, avec des enseignants dévoués et des ressources pédagogiques de qualité.</h3>
                <p>- Deepak PESCHARD │ Parent</p>
            </div>
        </section>
    )
}

export default Testimonials;