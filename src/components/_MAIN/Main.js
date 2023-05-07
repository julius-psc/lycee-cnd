


import React from "react";

import '../../styles/_MAIN/Main.css';


import LandingPage from "./LandingPage";
import CallToAction from "./CallToAction";
import ImageSlider from "./ImageSlider";
import Testimonials from "./Testimonials";

const Main = () => {
    const importAll = (r) => r.keys().map(r);
    const images = importAll(require.context('../../assets/images/cnd-slider', false, /\.(png|jpe?g)$/));
    
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