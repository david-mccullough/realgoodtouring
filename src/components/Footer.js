import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Footer = () => (
  <section id="footer">
    <div className="container contact-details">
      <h5>Booking</h5>
      <a href="mailto:booking@realgoodtouring.com">
        booking@realgoodtouring.com
      </a>
    </div>
    <div className="container social-details">
      <div className="footer-logo">
        <StaticImage
          src="../images/smalllogo.png"
          alt="Real Good Touring logo"
          placeholder="none"
        />
      </div>
      <a
        href="https://twitter.com/RealGoodTouring"
        target="_blank"
        className="social-link"
      >
        <StaticImage
          src="../images/twitter.png"
          alt="Twitter"
          placeholder="tracedSVG"
        />
      </a>
      <a
        href="https://www.instagram.com/realgoodtouring/"
        target="_blank"
        className="social-link"
      >
        <StaticImage
          src="../images/instagram.png"
          alt="Instagram"
          placeholder="tracedSVG"
        />
      </a>
      <a href="/privacy-policy" className="footer-link">
        Privacy Policy
      </a>
    </div>
  </section>
);

export default Footer;
