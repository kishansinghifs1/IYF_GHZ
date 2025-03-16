import React from "react";
import "./Hero.css";
import { Link } from "react-scroll";
const Hero = () => {
  return (
    <div className="hero" id="homepage">
      <div className="hero-text">
        <h2>Letter To Satsvarupa Goswami Maharaj </h2>
        <h1>Jan 9 , 1973 </h1>
        <h3>
          "…try to recruit some of the intelligent class of student class to
          take up this Krsna Consciousness philosophy and study it carefully.
          Try to recruit some of such men to become our devotees. There is need
          for intelligent young men to train them up as future leaders and
          preachers to go all over the world for spreading the message of Lord
          Caitanya Mahaprabhu."
        </h3>
        <Link to="our-founder-left" smooth={true} offset={-250} duration={800}>
          <button className="btn">Know About Our Founder</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
