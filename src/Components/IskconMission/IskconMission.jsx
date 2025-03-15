import React, { useEffect, useRef } from "react";

const IskconMissions = () => {
  const headerRef = useRef(null);
  const missionRefs = useRef([]);
  
  useEffect(() => {
    if (headerRef.current) {
      headerRef.current.style.opacity = "1";
      headerRef.current.style.transform = "translateY(0)";
    }
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1 }
    );

    missionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      missionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div style={{ 
      backgroundColor: "#FFF4EE",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "3rem 1rem",
      fontFamily: "'Inter', sans-serif",
      color: "#333333",
      margin: "10px",
    }}>
      <div style={{ 
        maxWidth: "900px",
        width: "100%",
        textAlign: "center"
      }}>
        <div 
          ref={headerRef}
          style={{
            marginBottom: "3rem",
            opacity: 0,
            transform: "translateY(20px)",
            transition: "opacity 0.8s ease-out, transform 0.8s ease-out"
          }}
        >
          <h2 style={{ 
            fontFamily: "'Playfair Display', serif",
            color: "#A65A2A",
            fontSize: "3em",
            fontWeight: "400",
            marginBottom: "0.5rem",
            letterSpacing: "0.03em"
          }}>
            7 missions of
          </h2>
          
          <h1 style={{ 
            fontFamily: "'Playfair Display', serif",
            fontSize: "4rem",
            fontWeight: "700",
            letterSpacing: "0.02em",
            margin: "0.5rem 0 2rem"
          }}>
            ISKCON
          </h1>
          
          <p style={{ 
            fontSize: "1.1rem",
            lineHeight: "1.8",
            maxWidth: "800px",
            margin: "0 auto 3rem",
            color: "#333333"
          }}>
            ISKCON's mission is to share the teachings of Krishna, educate people about spiritual science, build
            a global community, establish spiritual centres, distribute Vedic literature, organise joyful festivals,
            and inspire a simple and natural way of life.
          </p>
        </div>

        <div style={{
          padding: "1rem 0",
          textAlign: "left"
        }}>
          <div 
            ref={el => missionRefs.current[0] = el}
            style={{
              marginBottom: "2.5rem",
              opacity: 0,
              transform: "translateY(20px)",
              transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
              transitionDelay: "0.1s"
            }}
          >
            <h3 style={{ 
              marginBottom: "0.5rem",
              fontSize: "1.1rem",
              fontWeight: "600"
            }}>
              1. Spread Krishna consciousness worldwide:
            </h3>
            <p style={{ 
              paddingLeft: "1.5rem",
              borderLeft: "2px solid #A65A2A",
              fontSize: "1rem",
              lineHeight: "1.6",
              color: "#555555"
            }}>
              Our goal is to share the teachings of Krishna and his message of love and spiritual awakening with people everywhere.
            </p>
          </div>

          <div 
            ref={el => missionRefs.current[1] = el}
            style={{
              marginBottom: "2.5rem",
              opacity: 0,
              transform: "translateY(20px)",
              transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
              transitionDelay: "0.2s"
            }}
          >
            <h3 style={{ 
              marginBottom: "0.5rem",
              fontSize: "1.1rem",
              fontWeight: "600"
            }}>
              2. Educate people about the science of Krishna:
            </h3>
            <p style={{ 
              paddingLeft: "1.5rem",
              borderLeft: "2px solid #A65A2A",
              fontSize: "1rem",
              lineHeight: "1.6",
              color: "#555555"
            }}>
              We aim to provide knowledge and understanding about the profound wisdom and spiritual science in Krishna's teachings.
            </p>
          </div>

          <div 
            ref={el => missionRefs.current[2] = el}
            style={{
              marginBottom: "2.5rem",
              opacity: 0,
              transform: "translateY(20px)",
              transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
              transitionDelay: "0.3s"
            }}
          >
            <h3 style={{ 
              marginBottom: "0.5rem",
              fontSize: "1.1rem",
              fontWeight: "600"
            }}>
              3. Cultivate a global community of Krishna devotees:
            </h3>
            <p style={{ 
              paddingLeft: "1.5rem",
              borderLeft: "2px solid #A65A2A",
              fontSize: "1rem",
              lineHeight: "1.6",
              color: "#555555"
            }}>
              We strive to build a diverse and united community of individuals dedicated to practising and promoting Krishna consciousness.
            </p>
          </div>

          <div 
            ref={el => missionRefs.current[3] = el}
            style={{
              marginBottom: "2.5rem",
              opacity: 0,
              transform: "translateY(20px)",
              transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
              transitionDelay: "0.4s"
            }}
          >
            <h3 style={{ 
              marginBottom: "0.5rem",
              fontSize: "1.1rem",
              fontWeight: "600"
            }}>
              4. Establish centres for spiritual development:
            </h3>
            <p style={{ 
              paddingLeft: "1.5rem",
              borderLeft: "2px solid #A65A2A",
              fontSize: "1rem",
              lineHeight: "1.6",
              color: "#555555"
            }}>
              We endeavour to create places where people can gather to learn, practice, and experience the transformative power of Krishna consciousness.
            </p>
          </div>

          <div 
            ref={el => missionRefs.current[4] = el}
            style={{
              marginBottom: "2.5rem",
              opacity: 0,
              transform: "translateY(20px)",
              transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
              transitionDelay: "0.5s"
            }}
          >
            <h3 style={{ 
              marginBottom: "0.5rem",
              fontSize: "1.1rem",
              fontWeight: "600"
            }}>
              5. Teach and distribute Vedic literature:
            </h3>
            <p style={{ 
              paddingLeft: "1.5rem",
              borderLeft: "2px solid #A65A2A",
              fontSize: "1rem",
              lineHeight: "1.6",
              color: "#555555"
            }}>
              We prioritise publishing and distributing books and literature that convey the timeless wisdom of the Vedic texts, such as the Bhagavad Gita and Bhagavatam.
            </p>
          </div>

          <div 
            ref={el => missionRefs.current[5] = el}
            style={{
              marginBottom: "2.5rem",
              opacity: 0,
              transform: "translateY(20px)",
              transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
              transitionDelay: "0.6s"
            }}
          >
            <h3 style={{ 
              marginBottom: "0.5rem",
              fontSize: "1.1rem",
              fontWeight: "600"
            }}>
              6. Organise festivals and events:
            </h3>
            <p style={{ 
              paddingLeft: "1.5rem",
              borderLeft: "2px solid #A65A2A",
              fontSize: "1rem",
              lineHeight: "1.6",
              color: "#555555"
            }}>
              We organise vibrant festivals and events to celebrate and share the joy of Krishna consciousness, inviting everyone to participate and experience the blissful atmosphere.
            </p>
          </div>

          <div 
            ref={el => missionRefs.current[6] = el}
            style={{
              marginBottom: "2.5rem",
              opacity: 0,
              transform: "translateY(20px)",
              transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
              transitionDelay: "0.7s"
            }}
          >
            <h3 style={{ 
              marginBottom: "0.5rem",
              fontSize: "1.1rem",
              fontWeight: "600"
            }}>
              7. Encourage a simple and natural way of living:
            </h3>
            <p style={{ 
              paddingLeft: "1.5rem",
              borderLeft: "2px solid #A65A2A",
              fontSize: "1rem",
              lineHeight: "1.6",
              color: "#555555"
            }}>
              We promote a lifestyle emphasising simplicity, sustainability, and spiritual values, fostering harmony with nature and a deeper connection with Krishna.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IskconMissions;
