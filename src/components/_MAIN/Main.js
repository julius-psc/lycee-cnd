


import React from "react";

import '../../styles/_MAIN/Main.css';


import LandingPage from "./LandingPage";
import CallToAction from "./CallToAction";
import ImageSlider from "./ImageSlider";
import Testimonials from "./Testimonials";

import slider1 from '../../assets/images/Screenshot 2023-04-15 at 17.11.05.png'
import slider2 from '../../assets/images/Screenshot 2023-04-15 at 17.12.05.png';
import slider3 from '../../assets/images/Screenshot 2023-04-15 at 17.12.49.png';

const Main = () => {
    const images = [
        slider1,
        slider2,
        slider3
    ];

    return (
        <>
            <LandingPage />
            <ImageSlider images={images} />
            <CallToAction />
            <Testimonials />
        </>
    )
}

export default Main;