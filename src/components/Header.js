import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Header = () => (
  <header id="header" className="fixed">
    <div id="heaader-bg">
      <a href="/">
        <StaticImage
          src="../images/smalllogo.png"
          alt="Real Good Touring logo"
          height={45}
          imgStyle={{ objectFit: "contain" }}
          layout="fixed"
          placeholder="none"
        />
      </a>
      <div id="menu">Menu</div>
    </div>
    <div className="nav">
      <a href="https://store.realgoodtouring.com">Store</a>
      <a href="/#main">Upcoming Shows</a>
      <a href="covid">COVID</a>
      <a href="productions">Produced by RGT</a>
      <a href="careers">Careers</a>
      <a href="/#footer">Contact</a>
    </div>
  </header>
);

export default Header;
