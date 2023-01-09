import "./footer.styles.scss";
import { Link } from "react-router-dom";
const Footer = () => (
  <footer>
    <div className="info">
      <div className="contact-us">
        <h3>Contact Us</h3>
        <p>
          Call us for help at <a href="tel:+919667273499">+919667273499</a>
        </p>
        <p>
          Email us your queries at <br /><a href="mailto:mrPhonexCare@gmail.com">rebuyCare@gmail.com</a>
        </p>
      </div>
      <div className="seperator"></div>
      <div className="policies-links">
        <Link to="/tos">
          <p>terms of services | return policies</p>
        </Link>
        <Link to="/about-us">
          <p>abous us</p>
        </Link>
      </div>
    </div>
    <div className="seperator h"></div>
    {/* <div className="social-media-links">
            <h3>Our Social Media Handles</h3>
            <div className="handles-container">
            <a
          href="https://www.facebook.com/mrphonex.2022"
          target="_blank"
          rel="noreferrer"
        >
            <div className="handle fb">
              <img src="/icons/fb.png" alt="facebook page" />
              <p> @mrphonex.2022</p>
            <div className="underline"></div>
            </div>
            </a>
            <a
          href="https://www.instagram.com/mrphone_x"
          target="_blank"
          rel="noreferrer"
        >
            <div className="handle ig">
              <img src="/icons/ig.png" alt="instagram profile" />
              <p> @mrphone_x</p>
            <div className="underline"></div>
            </div>
            </a>
            <a
          href="https://wa.me/+919667273499"
          target="_blank"
          rel="noreferrer"
        >
            <div className="handle wa">
              <img src="/icons/wa.png" alt="whats app" />
              <p>+919667273499</p>
            <div className="underline"></div>
            </div>
            </a>
            </div>
    </div> */}
    <p>©copyright | www.rebuy.com</p>
  </footer>
);
export default Footer;
