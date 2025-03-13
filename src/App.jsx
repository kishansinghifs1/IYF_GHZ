import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Bace from "./Components/Mottos/Bace";
import Title from "./Components/Title/Title";
import AboutBace from './Components/AboutBace/AboutBace';
import Founder from "./Components/Founder/Founder";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle='Our Motto' title='Guiding souls on a journey of Vedic wisdom and devotion.'/>
        <Bace />
      </div>
      <div className="container">
        <Title subtitle='About Ahobilam BACE'/>
        <AboutBace />
      </div>
      <div className="container">
        <Title subtitle='THE SWAMI WHO STARTED IT ALL'/>
        <Founder />
      </div>
    </div>
  );
};

export default App;
