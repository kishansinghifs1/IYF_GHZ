import './Footer.css'
import qr from '../../assets/qr.jpg'
import { FaWhatsapp, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
function Footer() {
  return (
    <div className="app">
      <div className="maha-mantra">
        Hare Kṛṣṇa Hare Kṛṣṇa.. Kṛṣṇa Kṛṣṇa Hare Hare.. Hare Rāma Hare Rāma.. Rāma Rāma Hare Hare..
      </div>
      
      <div className="footer-container">
        <div className="get-in-touch">
          <h2>Get in touch</h2>
          <div className="devotee-image"></div>
        </div>

        <div className="footer-section">
          <h3>Ahobilam Bace</h3>
          <p>Jatt Chowk</p>
          <p>Near ABES College</p>
          <p>Chipiyana</p>
          <p>Ghaziabad- 201009</p>
        </div>

        <div className="footer-section">
          <h3>Donate</h3>
          <a href="#">Food for Needy</a>
          <a href="#">Online Puja</a>
          <a href="#">Sadhu Seva</a>
          <a href="#">General Donation</a>
          <a href="#">Anna Daan</a>
        </div>

        <div className="footer-section">
          <img src={qr} alt="" />
          <p>"No matter small or big, Krishna sees your </p>
          <p>Heart, whether you want to serve him or not"</p>
          <p> Kindly Send Payment Screenshot On</p>
          <p> ~ 9654865863</p>
        </div>

        <div className="footer-section">
          <h3>Contact us</h3>
          <p>Karbhajan Muni Das - 9654865863</p>
          <p>We're available (10 AM – 6 PM)</p>
          <div className="social-icons">
            <a href="https://whatsapp.com/channel/0029VaSENPW9hXF2XPDG5e41" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp size={24} />
              </a>
            <a href="https://www.instagram.com/iskconghaziabad/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.youtube.com/@ISKCONGhaziabad" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="copyright">
        Copyright © ISKCON Ghaziabad ~ International Society for Krishna Consciousness | Site Powered By – Ahobilam Bace®
      </div>
    </div>
  )
}

export default Footer