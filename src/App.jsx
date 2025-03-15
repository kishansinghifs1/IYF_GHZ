import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Bace from "./Components/Mottos/Bace";
import Title from "./Components/Title/Title";
import AboutBace from './Components/AboutBace/AboutBace';
import Founder from "./Components/Founder/Founder";
import Carousel from "./Components/Carousel/Carousel.jsx";
import IskconMissions from "./Components/IskconMission/IskconMission.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import ContactUs from "./Components/ContactUs/ContactUs.jsx";
import SaturdayEvent from './Components/SaturdayEventsNdDYS/SaturdayEvent';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Title subtitle='Our Motto' title='Guiding souls on a journey of Vedic wisdom and devotion.'/>
      <Bace />
      <div className="container">
      <Title subtitle='About Ahobilam BACE'/>
      <AboutBace />
      </div>
      <div className="container">
        <Carousel/>
      </div>
      <div className="container">
        <Title subtitle='Life Changing Courses'/>
        <ContactUs />
        <SaturdayEvent />
      </div>
      <div className="container">
        <Title subtitle='THE SWAMI WHO STARTED IT ALL'/>
        <Founder /> 
      </div> 
      <div className="container">
        <IskconMissions/>
      </div>
      <Footer/>
    </div>
  );
};

export default App;
