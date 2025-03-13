import React from "react";
import "./Bace.css";
import exploration from "../../assets/exploration.png";
import knowledge from "../../assets/knowledge.png";
import vedicknowledge from "../../assets/vediknowledge.png";
const Bace = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={exploration} alt="" />
        <h2>Practice</h2>
        <h3>Offering a platform for youth to cultivate devotion to Kṛṣṇa.</h3>
      </div>
      <div className="program">
        <img src={knowledge} alt="" />
        <h2>Promote</h2>
        <h3>Guiding youth in building a deep connection with Vedic traditions.</h3>
      </div>
      <div className="program">
        <img src={vedicknowledge} alt="" />
        <h2>Preserve</h2>
        <h3>Dedicated to inspiring a global community with the essence of Vedic scriptures.</h3>
      </div>
    </div>
  );
};

export default Bace;
