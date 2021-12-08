import * as React from "react";
import { graphql } from "gatsby";
import { remark } from "remark";
import remarkHtml from "remark-html";
import MetaTags from "../components/MetaTags";
import Layout from "../components/Layout";
import Collapsible from "../components/Collapsible";
import * as styles from "./careers.module.css";

function mdStringToHTML(mdString) {
  if (mdString)
    return remark().use(remarkHtml).processSync(mdString).toString();
  else return "";
}

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
          <h2 className="eyebrow" style={{ marginBottom: "100px" }}>
            {"VIP Q&A"}
          </h2>
          <div>
            {edges[0].node.frontmatter.sections.map((section) => (
              <Collapsible outerText={section.question}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: mdStringToHTML(section.answerMarkdown),
                  }}
                />
              </Collapsible>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default VipPage;

export const VipFaqQuery = graphql`
  query VipFaqQuery {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(vip)/" } }) {
      edges {
        node {
          id
          frontmatter {
            title
            sections {
              question
              answerMarkdown
            }
          }
        }
      }
    }
  }
`;
