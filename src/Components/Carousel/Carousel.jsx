import { useState } from "react"
import "./Carousel.css"
import Workshop from "../../BACE/Youth Program.jpg"
import Drama from "../../BACE/Drama.jpg"
import lectures from "../../BACE/Lectures.jpg"
import Prasadam from "../../BACE/Prasadam.jpg"
import spritualstudy from "../../BACE/abc.jpg"
import Cultural from "../../BACE/Cultural.jpg"

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const cards = [
    {
      id: 1,
      title: "Cultural Preservation",
      description: "Preserving ancient Vedic traditions and cultural heritage",
      image:Prasadam,
    },
    {
      id: 2,
      title: "Retreats and Workshops",
      description: "Immersive experiences to deepen spiritual understanding",
      image:lectures,
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
    },{
      id: 5,
      title: "Scriptual Studies",
      description: "Deep understanding of the Vedic texts for spiritual development",
      image:spritualstudy,
    },{
      id: 6,
      title: "Spiritual Leadership",
      description: "Developing future leaders with strong moral and spiritual values",
      image:Cultural,
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % cards.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + cards.length) % cards.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <div className="ap">
      <main className="main-container">
        <div className="ctn">
          {/* Header */}
          <header className="hd">
            <h3 className="sub">Bhaktivedanta Academy for</h3>
            <h1 className="tit">Culture & Education</h1>
            <p className="description">
              Offering comprehensive life-style based on the Hare Krishna philosophy, culture, and practices. Delve into
              Vedic Scriptures, Bhakti Yoga, Sankirtan Movement, Deity Worship, Music and more.
            </p>
          </header>

          <div className="image-grid">
            {cards.map((card, index) => (
              <div key={card.id} className="card">
                <img src={card.image || "/placeholder.svg"} alt={card.title} className="card-image" />
                <div className="card-overlay">
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-description">{card.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="carousel-nav">
            <button className="nav-btn" onClick={prevSlide}>
              <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <div className="dots-container">
              {cards.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentSlide ? "active" : ""}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <button className="nav-btn" onClick={nextSlide}>
              <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Carousel

