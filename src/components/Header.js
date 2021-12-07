import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";

const Header = ({ isHeaderFixed, isHomePage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const refStart = isHomePage ? "" : "/";

  return (
    <header id="header" className={isHeaderFixed ? "fixed" : ""}>
      <div id="heaader-bg">
        <a href={`${refStart}#site-header`}>
          <img
            src="../img/smalllogo.png"
            alt="Real Good Touring logo"
            height={45}
          />
        </a>
        <a
          id="menu"
          style={{ cursor: "pointer" }}
          onClick={() => setIsOpen(!isOpen)}
        >
          Menu
        </a>
      </div>
      <div className={"nav" + (isOpen ? " open" : "")}>
        <a href="https://store.realgoodtouring.com">Store</a>
        <a href={`${refStart}#main`}>Upcoming Shows</a>
        <a href="/covid">COVID</a>
        <a href="/productions">Produced by RGT</a>
        <a href="/careers">Careers</a>
        <a href={`${refStart}#newsletter`}>Contact</a>
      </div>
    </header>
  );
};

export default Header;
