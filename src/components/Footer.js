import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Footer = () => (
  <section id="footer">
    <div class="container contact-details">
      <h5>Booking</h5>
      <a href="mailto:booking@realgoodtouring.com">
        booking@realgoodtouring.com
      </a>
    </div>
    <div class="container social-details">
      <div className="footer-logo">
        <StaticImage
          src="../images/smalllogo.png"
          alt="Real Good Touring logo"
        />
      </div>
      <a
        href="https://twitter.com/RealGoodTouring"
        target="_blank"
        class="social-link"
      >
        <StaticImage
          src="../images/twitter.png"
          alt="Twitter"
          placeholder="none"
        />
      </a>
      <a
        href="https://www.instagram.com/realgoodtouring/"
        target="_blank"
        class="social-link"
      >
        <StaticImage
          src="../images/instagram.png"
          alt="Instagram"
          placeholder="none"
        />
      </a>
      <a href="/privacy-policy" class="footer-link">
        Privacy Policy
      </a>
    </div>
  </section>
);

export default Footer;
