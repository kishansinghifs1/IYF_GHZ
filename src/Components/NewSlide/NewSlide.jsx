import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import "./NewSlide.css";
import Workshop from "../../BACE/Youth Program.jpg";
import Drama from "../../BACE/Drama.jpg";
import Lectures from "../../BACE/Lectures.jpg";
import Prasadam from "../../BACE/Prasadam.jpg";
import SpiritualStudy from "../../BACE/abc.jpg";
import Cultural from "../../BACE/Cultural.jpg";

const NewSlide = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % carouselItems.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const carouselItems = [
    {
      title: "Retreats and Workshops",
      image: Workshop,
      description:
        "Immerse yourself in transformative spiritual experiences through our guided retreats and interactive workshops.",
    },
    {
      title: "Devotional Drama and Arts",
      image: Drama,
      description:
        "Nurturing talents in music and arts as expressions of devotion.",
    },
    {
      title: "Youth Empowerment",
      image:Lectures,
      description:
        "Guiding the next generation with spiritual wisdom, character development, and leadership skills.",
    },
    {
      title: "Scriptural Studies",
      image: SpiritualStudy,
      description:
        "Explore ancient Vedic texts through systematic study programs and guided discussions.",
    },
    {
        title: "Cultural Preservation",
        image: Prasadam,
        description:
          "Preserving ancient Vedic traditions and cultural heritage",
      },
      {
        title: "Spritual Leadership",
        image: Cultural,
        description:
          "Developing future leaders with strong moral and spiritual values",
      },
  ];

  return (
    <div className={`page-container ${isLoaded ? "loaded" : ""}`}>
      <header className="hd">
        <h3 className="sub">Bhaktivedanta Academy for</h3>
        <h1 className="tit">Culture & Education</h1>
        <p className="description">
          Offering a comprehensive lifestyle based on the Hare Krishna philosophy,
          culture, and practices. Delve into Vedic Scriptures, Bhakti Yoga,
          Sankirtan Movement, Deity Worship, Music, and more.
        </p>
      </header>

      <section className="carousel-section">
        <div className="carousel-container">
          {carouselItems.map((item, index) => (
            <div
              key={index}
              className={`carousel-item ${
                index === activeSlide ? "active" : ""
              }`}
              style={{ backgroundImage: `url(${item.image})` }}
              role="img"
              aria-label={item.title}
            >
              <div className="carousel-content">
                <h3 className="carousel-title">{item.title}</h3>
                <p className="carousel-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="carousel-dots">
          {carouselItems.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === activeSlide ? "active" : ""}`}
              onClick={() => setActiveSlide(index)}
            />
          ))}
        </div>
      </section>

      <section className="programs-section">
        <div className="container">
          <h2 className="section-title">Our Programs</h2>
          <div className="programs-grid">
            {[
              {
                icon: "🕉️",
                title: "Bhakti Yoga",
                description:
                  "Experience the path of devotion through ancient practices of mantra meditation, kirtan, and service.",
              },
              {
                icon: "📚",
                title: "Vedic Studies",
                description:
                  "Systematic study of Bhagavad Gita, Srimad Bhagavatam, and other Vedic literatures with experienced teachers.",
              },
              {
                icon: "🎵",
                title: "Kirtan & Music",
                description:
                  "Learn traditional instruments, sacred chants, and participate in uplifting musical experiences.",
              },
              {
                icon: "🍃",
                title: "Sustainable Living",
                description:
                  "Explore ecological farming, cow protection, and simple living principles based on Vedic wisdom.",
              },
            ].map((program, index) => (
              <div className="program-card" key={index}>
                <div className="program-icon">{program.icon}</div>
                <h3>{program.title}</h3>
                <p>{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewSlide;
