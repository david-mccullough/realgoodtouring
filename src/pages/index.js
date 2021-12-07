import * as React from "react";
import { graphql } from "gatsby";
import MetaTags from "./../components/MetaTags";
import { StaticImage } from "gatsby-plugin-image";
import Tour from "./../components/Tour";
import Footer from "../components/Footer";
import NewsletterForm from "../components/NewsletterForm";

// markup
const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const [isHeaderFixed, setIsHeaderFixed] = React.useState(false);
  React.useEffect(() => {
    setIsHeaderFixed(window.scrollY > 200);
    window.addEventListener("scroll", () => {
      setIsHeaderFixed(window.scrollY > 200);
    });
  }, []);

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

  return (
    <>
      <MetaTags title="Real Good Touring" />
      <header id="header" className={isHeaderFixed && "fixed"}>
        <div id="heaader-bg">
          <a href="#site-header">
            <StaticImage
              src="../images/smalllogo.png"
              alt="Real Good Touring logo"
              height={45}
              imgStyle={{ objectFit: "contain" }}
              layout="fixed"
            />
          </a>
          <div id="menu">Menu</div>
        </div>
        <div className="nav">
          <a href="https://store.realgoodtouring.com">Store</a>
          <a href="#main">Upcoming Shows</a>
          <a href="covid">COVID</a>
          <a href="productions">Produced by RGT</a>
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
              placeholder="none"
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
      {/* TODO REMOVE COMMENTS !!!!!!!!!!!!!!!!! <noscript>
        <img
          src="https://ws.zoominfo.com/pixel/lwayZkuFnM9h0qAjqkut"
          width="1"
          height="1"
          style={{display: "none";}}
        />
      </noscript> */}
      <NewsletterForm />
      <Footer />
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
                  width: 500
                  blurredOptions: { width: 100 }
                  placeholder: BLURRED
                  transformOptions: { cropFocus: NORTH }
                )
              }
            }
            events {
              ticketsLink
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
