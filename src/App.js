import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import { Helmet } from 'react-helmet';

import '../src/App.css';

import Navbar from "./components/_SHARED/Navbar";
import ScrollToTopButton from "./components/_SHARED/ScrollToTop";
import Footer from "./components/_SHARED/Footer";

import Main from "./components/_MAIN/Main";

import Events from "./components/_EVENTS/Event";

import About from "./components/_ABOUT/About";
import Specialities from "./components/_ABOUT/_SPECIALITIES/Specialities";
import Options from "./components/_ABOUT/_OPTIONS/Options";

import Levels from "./components/_LEVELS/Levels";

import Contact from "./components/_CONTACT/Contact";

import Sign from "./components/_SIGN/Sign";


function App() {
  return (
    <Router>
      <Navbar/>
      <Helmet>
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          <meta name="theme-color" content="#ffffff" />
      </Helmet>
      <Routes>
        <Route path="/lycee-cnd/accueil" element={<Main />} />
        <Route path="/lycee-cnd/" element={<Navigate to="/lycee-cnd/accueil" />} />
        <Route path="/lycee-cnd/evenements" element={<Events/>} />
        <Route exact path="/lycee-cnd/a-propos" element={<About />} />
        <Route exact path="/lycee-cnd/specialities" element={<Specialities/>} />
        <Route exact path="/lycee-cnd/options" element={<Options/>} />
        <Route exact path="/lycee-cnd/niveaux" element={<Levels/>} />
        <Route exact path="/lycee-cnd/contacter" element={<Contact/>} />
        <Route exact path="/lycee-cnd/inscription" element={<Sign/>} />
      </Routes>
      <ScrollToTopButton />
      <Footer/>
    </Router>
  )
}

export default App;
