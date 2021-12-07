import * as React from "react";
import MetaTags from "../components/MetaTags";
import Layout from "../components/Layout";
import * as styles from "./covid.module.css";

const CovidPage = () => {
  return (
    <Layout>
      <MetaTags title="COVID - Real Good Touring" />

      <section id="main" className={styles.main}>
        <div className="container">
          <div className={styles.content}>
            <h1>Real Good Touring’s COVID Policy</h1>
            <p>
              We don't make the rules, we just play by them. For information
              regarding masking, vaccination, and COVID testing requirements for
              show entry, contact the venue directly. Make sure to follow up
              prior to the show, as policies are subject to change.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default CovidPage;
