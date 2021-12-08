import * as React from "react";
import { graphql } from "gatsby";
// import * as dayjs from "dayjs";
import MetaTags from "./../components/MetaTags";
import { StaticImage } from "gatsby-plugin-image";
import Tour from "./../components/Tour";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NewsletterForm from "../components/NewsletterForm";
import * as dayjs from "dayjs";
import dayjsPluginUTC from "dayjs-plugin-utc";
dayjs.extend(dayjsPluginUTC);

// markup
const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
  extensions,
}) => {
  const [isHeaderFixed, setIsHeaderFixed] = React.useState(false);
  React.useEffect(() => {
    // scroll pos sets navbar fixed status
    setIsHeaderFixed(window.scrollY > 200);
    window.addEventListener("scroll", () => {
      setIsHeaderFixed(window.scrollY > 200);
    });

    // anchors to smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    });
  }, []);

  let currentDate = dayjs();

  edges.forEach((edge) => {
    edge.node.frontmatter.events.sort(function (a, b) {
      return dayjs(a.date) - dayjs(b.date);
    });
    edge.node.frontmatter.events = edge.node.frontmatter.events.filter(
      (event) => dayjs(event.date) > currentDate
    );
  });

  // if all events have expired, filter out this tour OR we arent live yet
  edges = edges.filter(
    (edge) =>
      edge.node.frontmatter.events.length > 0 &&
      dayjs(edge.node.frontmatter.liveTime) < currentDate
  );

  edges.sort(function (a, b) {
    return (
      dayjs(b.node.frontmatter.liveTime) - dayjs(a.node.frontmatter.liveTime)
    );
  });

  const Tours = edges.map((edge) => (
    <Tour key={edge.node.id} tour={edge.node.frontmatter} />
  ));
  return (
    <>
      <MetaTags title="Real Good Touring" />
      <Header isHeaderFixed={isHeaderFixed} isHomePage={true} />
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
      <noscript>
        <img
          src="https://ws.zoominfo.com/pixel/lwayZkuFnM9h0qAjqkut"
          width="1"
          height="1"
          style={{ display: "none" }}
        />
      </noscript>
      <NewsletterForm />
      <Footer />
    </>
  );
};
export default IndexPage;

export const AllToursJsonQuery = graphql`
  query AllToursQuery {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(tours)/" } }) {
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
            liveTime
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
