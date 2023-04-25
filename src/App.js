import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./components/_SHARED/Navbar";
import ScrollToTopButton from "./components/_SHARED/ScrollToTop";
import Footer from "./components/_SHARED/Footer";

import Main from "./components/_MAIN/Main";

import About from "./components/_ABOUT/About";
import Specialities from "./components/_ABOUT/_SPECIALITIES/Specialities";
import Options from "./components/_ABOUT/_OPTIONS/Options";

import Levels from "./components/_LEVELS/Levels";


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes basename="/lycee-cnd">
        <Route exact path="/accueil" element={<Main />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/specialities" element={<Specialities/>} />
        <Route exact path="/options" element={<Options/>} />
        <Route exact path="/levels" element={<Levels/>} />
      </Routes>
      <ScrollToTopButton />
      <Footer/>
    </Router>
  )
}

export default App;
