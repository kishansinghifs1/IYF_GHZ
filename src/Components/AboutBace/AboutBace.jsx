import React from "react";
import "./AboutBace.css";
import bace from "../../assets/Ahobilam Bacee.jpg";
const Bace = () => {
  return (
    <div>
      <div className="about">
        <div className="about-left">
          <img src={bace} alt="" className="about-img" />
        </div>
      <div className="about-right">
        <h2>Ahobilam BACE</h2>
        <p>
          Bhaktivedanta Academy for Culture and
          Education (BACE) skillfully combines the deep lessons of spiritual
          enlightenment with academic brilliance. A transforming doorway, BACE
          is more than simply an organization; it invites people to embark on a
          path of self-discovery, personal growth, and a better understanding of
          the eternal knowledge of Krishna consciousness. Through its engaging
          and stimulating programs, BACE creates a motivating atmosphere where
          learning goes beyond the norm and awakens people to a greater purpose.
          The Ahobilam Bace is committed to encouraging self-compassion,
          self-realization, and spiritual development. We work to give people
          the means to realize their goals because we think that everyone should
          have the chance to pursue the path of enlightenment and spiritual
          development.
        </p>
      </div>
      </div>
    </div>
  );
};

export default Bace;
