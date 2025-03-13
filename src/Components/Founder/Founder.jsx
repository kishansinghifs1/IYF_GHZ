import React from 'react'
import './Founder.css'
import acharya from '../../Acharya/our_founder.jpg'
import photo1 from '../../Acharya/_1.jpg';
import photo2 from '../../Acharya/_3.jpg';
import photo5 from '../../Acharya/_5.jpg';
import photo6 from '../../Acharya/_6.jpg';
const Founder = () => {
  return (
    <div>
       <div className="our-founder-left">
        <img src={acharya} alt="" className="main" />
       </div>
       <div className="our-founder-right">
        <h2>HIS DIVINE GRACE A.C. BHAKTIVEDANTA SWAMI PRABHUPADA</h2>
        <h3>FOUNDER-ACHARYA : INTERNATIONAL SOCIETY FOR KRISHNA CONSCIOUSNESS</h3>
        <p>Srila Prabhupada (1896-1977), was an extraordinary personality who dedicated his life for teaching the world about Krishna consciousness, ancient India’s most noble message of spiritual wisdom. In 1965, at the age of 69, he sailed from India to New York to share Lord Krishna’s message, on the order of his spiritual master Srila Bhaktisiddhanta Saraswati Thakura, representing a line of teachers dating back to Lord Krishna Himself. </p>
       </div>
       <div className="various-img">
        <img src={photo1} alt="" />
        <img src={photo2} alt="" />
        <img src={photo5} alt="" />
        <img src={photo6} alt="" />
       </div>
    </div>
  )
}

export default Founder
