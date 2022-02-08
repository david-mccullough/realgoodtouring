import * as React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Tour from "./../components/Tour";
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
  const [tours, setTours] = React.useState([]);
  React.useEffect(() => {
    // tours
    let currentDate = dayjs();

    edges.forEach((edge) => {
      edge.node.frontmatter.events.sort(function (a, b) {
        if (!a.date || !b.date) return 0;
        else return dayjs(a.date) - dayjs(b.date);
      });
      edge.node.frontmatter.events = edge.node.frontmatter.events.filter(
        (event) => {
          if (!event.date) return true;
          else return dayjs(event.date) > currentDate;
        }
      );
    });

    // if all events have expired, filter out this tour OR we arent live yet
    let filtered = edges.filter(
      (edge) => edge.node.frontmatter.events.length > 0
    );

    setTours(
      filtered.map((edge) => (
        <Tour key={edge.node.id} tour={edge.node.frontmatter} />
      ))
    );
  }, []);

  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <title>Atsuko Presents Hi</title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="MobileOptimized" content="320" />
        <link rel="canonical" href="https://www.atsukolive.com" />
        <meta name="description" content="Atsuko Present HI! Live!" />
        <meta property="og:site_name" content="Atsuko Live!" />
        <meta property="og:title" content="Atsuko Live!" />
        <meta property="og:url" content="https://www.atsukolive.com" />
        <meta property="og:type" content="website" />
        <link
          rel="shortcut icon"
          href="https://www.atsukolive.com/img/icon.png"
        ></link>
      </Helmet>

      <body>
        <div className="container">
          <div className="side">
            <img src="./img/main-graphic.png" alt="Hi Graphic" />
            <a
              href="https://www.realgoodtouring.com"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="./img/rgt-trimmed.png"
                className="rgt desktop"
                alt="Real Good Touring"
              />
            </a>
          </div>
          <div className="dates">
            <div style={{ width: "80%", margin: "1em auto 0 auto" }}>
              <div className="video-player-container">
                <iframe
                  className="video-player"
                  src="https://www.youtube.com/embed/BLLfkV6ZJVU?controls=1&modestbranding=0&showinfo=0&rel=0"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>

            <ul className="date-list">{tours}</ul>

            <a
              href="https://www.realgoodtouring.com"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="./img/rgt-trimmed.png"
                className="mobile"
                alt="Real Good Touring"
              />
            </a>
          </div>
        </div>
      </body>
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
