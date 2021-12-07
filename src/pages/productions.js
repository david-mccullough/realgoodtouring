import * as React from "react";
import MetaTags from "../components/MetaTags";
import Layout from "../components/Layout";
import * as styles from "./productions.module.css";

const ProducedByRgtPage = () => {
  return (
    <Layout>
      <MetaTags title="Produced by RGT - Real Good Touring">
        <script src="scripts/image-gallery.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
      </MetaTags>

      <section id="main" className={styles.main}>
        <div className="container">
          <h1>Production Shots</h1>
          <div id="curtains" className={styles.curtains}>
            <a className={styles.prev} id="prev">
              Prev
            </a>
            <a className={styles.next} id="next">
              Next
            </a>
            <div id="stage" className={styles.stage}>
              <img
                className="unas-group"
                src="../img/production-images/prod-unus-annus-1.jpg"
                alt="Unus Annus Final Stream (11.13.2020)"
                placeholder="tracedSVG"
              />

              <img
                src="../img/production-images/prod-unus-annus-2.jpg"
                alt="Unus Annus Final Stream (11.13.2020)"
                placeholder="tracedSVG"
              />
              <img
                src="../img/production-images/prod-unus-annus-3.jpg"
                alt="Unus Annus Final Stream (11.13.2020)"
                placeholder="tracedSVG"
              />

              <img
                className="bright-group"
                src="../img/production-images/prod-brightspot-1.jpg"
                alt="Bright Spot (10.17.2020)"
                placeholder="tracedSVG"
              />
              <img
                src="../img/production-images/prod-brightspot-2.jpg"
                alt="Bright Spot (10.17.2020)"
                placeholder="tracedSVG"
              />
              <img
                src="../img/production-images/prod-brightspot-3.jpg"
                alt="Bright Spot (10.17.2020)"
                placeholder="tracedSVG"
              />
              <img
                src="../img/production-images/prod-brightspot-4.jpg"
                alt="Bright Spot (10.17.2020)"
                placeholder="tracedSVG"
              />
              <img
                src="../img/production-images/prod-brightspot-5.jpg"
                alt="Bright Spot (10.17.2020)"
                placeholder="tracedSVG"
              />

              <img
                className="thankmas-group"
                src="../img/production-images/prod-thankmas-1.jpg"
                alt="Thankmas (12.17.2019)"
                placeholder="tracedSVG"
              />
              <img
                src="../img/production-images/prod-thankmas-2.jpg"
                alt="Thankmas (12.17.2019)"
                placeholder="tracedSVG"
              />
              <img
                src="../img/production-images/prod-thankmas-3.jpg"
                alt="Thankmas (12.17.2019)"
                placeholder="tracedSVG"
              />
              <img
                src="../img/production-images/prod-thankmas-4.jpg"
                alt="Thankmas (12.17.2019)"
                placeholder="tracedSVG"
              />
              <img
                src="../img/production-images/prod-thankmas-5.jpg"
                alt="Thankmas (12.17.2019)"
                placeholder="tracedSVG"
              />
              <img
                src="../img/production-images/prod-thankmas-6.jpg"
                alt="Thankmas (12.17.2019)"
                placeholder="tracedSVG"
              />

              <img
                className="witching-group"
                src="../img/production-images/prod-witching-hour-1.jpg"
                alt="Witching Hour (10.31.2020)"
                placeholder="tracedSVG"
              />
              <img
                src="../img/production-images/prod-witching-hour-2.jpg"
                alt="Witching Hour (10.31.2020)"
                placeholder="tracedSVG"
              />
              <img
                src="../img/production-images/prod-witching-hour-3.jpg"
                alt="Witching Hour (10.31.2020)"
                placeholder="tracedSVG"
              />
            </div>
          </div>
          <div id="caption" className={styles.caption}>
            Unus Annus Final Stream (11.13.2020)
          </div>
          <div id="galleryGroups" className={styles.galleryGroups}>
            <a id="unas-group">Unus Annus</a>
            <a id="bright-group">Bright Spot</a>
            <a id="thankmas-group">Thankmas</a>
            <a id="witching-group">Witching Hour</a>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default ProducedByRgtPage;
