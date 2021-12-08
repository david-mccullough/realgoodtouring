import * as React from "react";
import { graphql } from "gatsby";
import MetaTags from "../components/MetaTags";
import Layout from "../components/Layout";
import Collapsible from "../components/Collapsible";
import * as styles from "./careers.module.css";

const VipPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  return (
    <Layout>
      <MetaTags title="VIP - Real Good Touring" />

      <section id="main" className={styles.main}>
        <div className="container">
          <h2 className="eyebrow" style={{ marginBottom: "150px" }}>
            {"VIP Q&A"}
          </h2>
          <div className={styles.content}>
            <Collapsible
              innerContent={"wassup"}
              outerText="This is question number 1"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default VipPage;

export const VipFaqQuery = graphql`
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
