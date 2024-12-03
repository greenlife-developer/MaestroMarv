import logo from "../../assets/images/logo_footer.svg";
import facebook from "../../assets/images/facebook.svg";
import twitter from "../../assets/images/twitter.svg";
import ig from "../../assets/images/ig.svg";
import linkedin from "../../assets/images/linkedin.svg";
import youtube from "../../assets/images/youtube.svg";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer_container">
      <div className="footer_items">
        <div className="logo_social_media">
          <div className="logo">
            <img src={logo} alt="" />
          </div>

          <div className="social_media">
            <a href="https://www.facebook.com/">
              <img src={facebook} alt="" />
            </a>
            <a href="https://www.twitter.com/">
              <img src={twitter} alt="" />
            </a>
            <a href="https://www.instagram.com/">
              <img src={ig} alt="" />
            </a>
            <a href="https://www.linkedin.com/">
              <img src={linkedin} alt="" />
            </a>
            <a href="https://www.youtube.com/">
              <img src={youtube} alt="" />
            </a>
          </div>
        </div>
        <div className="other_links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="#itsupport">IT Support</a>
            </li>
            <li>
              <a href="#computernetwork">Computer Network</a>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <a href="#applerepair">Apple repair</a>
            </li>
            <li>
              <a href="#datarecovery">Data Recovery</a>
            </li>
            <li>
              <Link to="/about">Our Team</Link>
            </li>
            <li>
              <a href="#datarecovery">Computer Repair</a>
            </li>
            <li>
              <a href="#datarecovery">Terms of Services</a>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <a href="#datarecovery">Tech Services</a>
            </li>
          </ul>
        </div>
        <div className="social_media_for_mobile">
          <a href="https://www.facebook.com/">
            <img src={facebook} alt="" />
          </a>
          <a href="https://www.twitter.com/">
            <img src={twitter} alt="" />
          </a>
          <a href="https://www.instagram.com/">
            <img src={ig} alt="" />
          </a>
          <a href="https://www.linkedin.com/">
            <img src={linkedin} alt="" />
          </a>
          <a href="https://www.youtube.com/">
            <img src={youtube} alt="" />
          </a>
        </div>
      </div>
      <div className="copyright">
        <p>© {year} Maestromarv Tech Solutions. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
