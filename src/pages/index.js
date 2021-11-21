import * as React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import { StaticImage } from "gatsby-plugin-image";
import Tour from "./../components/Tour";
import "../styles/index.css";

// markup
const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  // useEffect(() => {
  //   console.log(edges);
  // }, []);
  let currentDate = new Date(new Date().toDateString());
  edges.forEach((edge) => {
    edge.events = edge.node.frontmatter.events.sort(function (a, b) {
      return new Date(a.date) - new Date(b.date);
    });
    edge.node.events = edge.node.frontmatter.events.filter(
      (event) => new Date(new Date(event.date).toDateString()) <= currentDate
    );
  });

  const Tours = edges
    //.filter((edge) => edge.node.events.length === 0) // if all events have expired, filter out this tour
    .map((edge) => <Tour key={edge.node.id} tour={edge.node.frontmatter} />);

  console.log(edges);
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <title>Real Good Touring</title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="MobileOptimized" content="320" />
        <link rel="canonical" href="https://www.realgoodtouring.com" />
        <meta
          name="description"
          content="We tour Youtube, Streaming, and Content Creator acts around the world! Live!"
        />
        <meta property="og:site_name" content="Real Good Touring" />
        <meta property="og:title" content="Real Good Touring" />
        <meta property="og:url" content="https://www.realgoodtouring.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.realgoodtouring.com/assets/share-large.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="416" />
        <meta itemprop="name" content="Real Good Touring" />
        <meta itemprop="url" content="https://www.realgoodtouring.com" />
        <meta name="twitter:title" content="Real Good Touring" />
        <meta name="twitter:url" content="https://www.realgoodtouring.com" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="description"
          content="We tour Youtube, Streaming, and Content Creator acts around the world! Live!"
        />
        <meta
          name="twitter:image"
          content="https://www.realgoodtouring.com/assets/share-large.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          rel="shortcut icon"
          href="https://www.realgoodtouring.com/assets/images/favicon.png"
        ></link>
        <script src="scripts/cookie-consent.min.js"></script>
        <script src="scripts/cookie-consent-loader.js"></script>
      </Helmet>
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
        <div className="nav">
          <a href="https://store.realgoodtouring.com">Store</a>
          <a href="#main">Upcoming Shows</a>
          <a href="covid">COVID</a>
          <a href="produced-by-rgt">Produced by RGT</a>
          <a href="careers">Careers</a>
          <a href="#footer">Contact</a>
        </div>
      </header>
      <header id="site-header">
        <div className="container">
          <div id="logo">
            <StaticImage
              src="../images/logo.png"
              alt="Real Good Touring logo"
            />
          </div>
        </div>
      </header>
      <section id="main">
        <div className="container">
          <p className="eyebrow">Upcoming Shows</p>
          <h2>Recently Announced</h2>
          <br />
          <div className="alert">
            Contact the venue to learn masking, vaccination, and COVID testing
            requirements for show entry.
          </div>
          <ul className="date-list">{Tours}</ul>
        </div>
      </section>
    </>
  );
};
export default IndexPage;

export const AllToursJsonQuery = graphql`
  query AllToursQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            Image {
              childImageSharp {
                gatsbyImageData(
                  width: 400
                  height: 400
                  blurredOptions: { width: 100 }
                  placeholder: BLURRED
                  transformOptions: { cropFocus: NORTH }
                )
              }
            }
            events {
              body
              date
              isSoldOut
              location
              venueName
              note
            }
          }
        }
      }
    }
  }
`;
