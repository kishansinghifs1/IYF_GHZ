import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Bace from "./Components/Mottos/Bace";
import Title from "./Components/Title/Title";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle='Our Motto' title='Guiding souls on a journey of Vedic wisdom and devotion.'/>
        <Bace />
      </div>
    </div>
  );
};

export default App;
