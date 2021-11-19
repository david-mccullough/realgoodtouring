import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <header id="header">
        <div id="heaader-bg">
          <a href="#site-header">
            <StaticImage
              src="../images/smalllogo.png"
              alt="Real Good Touring logo"
            />
          </a>
          <div id="menu">Menu</div>
        </div>
        <div class="nav">
          <a href="https://store.realgoodtouring.com">Store</a>
          <a href="#main">Upcoming Shows</a>
          <a href="covid">COVID</a>
          <a href="produced-by-rgt">Produced by RGT</a>
          <a href="careers">Careers</a>
          <a href="#footer">Contact</a>
        </div>
      </header>
      <header id="site-header">
        <div class="container">
          <div id="logo">
            <StaticImage
              src="../images/logo.png"
              alt="Real Good Touring logo"
            />
          </div>
        </div>
      </header>
      <section id="main">
        <div class="container">
          <p class="eyebrow">Upcoming Shows</p>
          <h2>Recently Announced</h2>
          <br />
          <div class="alert">
            Contact the venue to learn masking, vaccination, and COVID testing
            requirements for show entry.
          </div>
        </div>

        <ul class="date-list"></ul>
      </section>
    </Layout>
  );
};

export default IndexPage;
