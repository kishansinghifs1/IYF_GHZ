import React, { useState } from "react";
import "./Slider.css";
import Workshop from "../../BACE/Youth Program.jpg";
import Drama from "../../BACE/Drama.jpg";
import Lectures from "../../BACE/Lectures.jpg";
import Prasadam from "../../BACE/Prasadam.jpg";
import SpiritualStudy from "../../BACE/abc.jpg";
import Cultural from "../../BACE/Cultural.jpg";

const Sliders = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const cards = [
    {
      id: 1,
      title: "Cultural Preservation",
      description: "Preserving ancient Vedic traditions and cultural heritage",
      image: Prasadam,
    },
    {
      id: 2,
      title: "Retreats and Workshops",
      description: "Immersive experiences to deepen spiritual understanding",
      image: Lectures,
    },
    {
      id: 3,
      title: "Devotional Music and Arts",
      description: "Exploring bhajans, kirtans, and traditional artistic expressions",
      image: Drama,
    },
    {
      id: 4,
      title: "Youth Empowerment",
      description: "Programs designed to inspire and guide the next generation",
      image: Workshop,
    },
    {
      id: 5,
      title: "Scriptural Studies",
      description: "Deep understanding of the Vedic texts for spiritual development",
      image: SpiritualStudy,
    },
    {
      id: 6,
      title: "Spiritual Leadership",
      description: "Developing future leaders with strong moral and spiritual values",
      image: Cultural,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <div className="slider-container">
      <header className="hd">
        <h3 className="sub">Bhaktivedanta Academy for</h3>
        <h1 className="tit">Culture & Education</h1>
        <p className="description">
          Offering a comprehensive lifestyle based on the Hare Krishna philosophy,
          culture, and practices. Delve into Vedic Scriptures, Bhakti Yoga,
          Sankirtan Movement, Deity Worship, Music, and more.
        </p>
      </header>
      
      <div className="slider">
        <button className="nav-btn" onClick={prevSlide}>
          <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <div className="card-container">
          <div className="cd">
            <img src={cards[currentSlide].image} alt={cards[currentSlide].title} className="card-image" />
            <div className="card-overlay">
              <h3 className="card-title">{cards[currentSlide].title}</h3>
              <p className="card-description">{cards[currentSlide].description}</p>
            </div>
          </div>
        </div>

        <button className="nav-btn" onClick={nextSlide}>
          <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      <div className="dots-container">
        {cards.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentSlide === index ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Sliders;
