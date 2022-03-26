import * as React from "react";
import MetaTags from "../components/MetaTags";
import Layout from "../components/Layout";
import * as styles from "./productions.module.css";

const ProducedByRgtPage = () => {
  const images = [
    {
      group: "unas-group",
      src: "../img/production-images/prod-unus-annus-1.jpg",
      alt: "Unus Annus Final Stream (11.13.2020)",
    },
    {
      group: "unas-group",
      src: "../img/production-images/prod-unus-annus-2.jpg",
      alt: "Unus Annus Final Stream (11.13.2020)",
    },
    {
      group: "unas-group",
      src: "../img/production-images/prod-unus-annus-3.jpg",
      alt: "Unus Annus Final Stream (11.13.2020)",
    },
    {
      group: "bright-group",
      src: "../img/production-images/prod-brightspot-1.jpg",
      alt: "Bright Spot (10.17.2020))",
    },
    {
      group: "bright-group",
      src: "../img/production-images/prod-brightspot-2.jpg",
      alt: "Bright Spot (10.17.2020))",
    },
    {
      group: "bright-group",
      src: "../img/production-images/prod-brightspot-3.jpg",
      alt: "Bright Spot (10.17.2020))",
    },
    {
      group: "bright-group",
      src: "../img/production-images/prod-brightspot-4.jpg",
      alt: "Bright Spot (10.17.2020))",
    },
    {
      group: "bright-group",
      src: "../img/production-images/prod-brightspot-5.jpg",
      alt: "Bright Spot (10.17.2020))",
    },
    {
      group: "thankmas-group",
      src: "../img/production-images/prod-thankmas-1.jpg",
      alt: "Thankmas (12.17.2019)",
    },
    {
      group: "thankmas-group",
      src: "../img/production-images/prod-thankmas-2.jpg",
      alt: "Thankmas (12.17.2019)",
    },
    {
      group: "thankmas-group",
      src: "../img/production-images/prod-thankmas-3.jpg",
      alt: "Thankmas (12.17.2019)",
    },
    {
      group: "thankmas-group",
      src: "../img/production-images/prod-thankmas-4.jpg",
      alt: "Thankmas (12.17.2019)",
    },
    {
      group: "thankmas-group",
      src: "../img/production-images/prod-thankmas-5.jpg",
      alt: "Thankmas (12.17.2019)",
    },
    {
      group: "thankmas-group",
      src: "../img/production-images/prod-thankmas-6.jpg",
      alt: "Thankmas (12.17.2019)",
    },
    {
      group: "witching-group",
      src: "../img/production-images/prod-witching-hour-1.jpg",
      alt: "Witching Hour (10.31.2020)",
    },
    {
      group: "witching-group",
      src: "../img/production-images/prod-witching-hour-2.jpg",
      alt: "Witching Hour (10.31.2020)",
    },
    {
      group: "witching-group",
      src: "../img/production-images/prod-witching-hour-3.jpg",
      alt: "Witching Hour (10.31.2020)",
    },
  ];
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const [autoIncrementInterval, setAutoIncrementInterval] =
    React.useState(null);
  const [isActive, setIsActive] = React.useState(true);

  React.useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        autoIncrement();
      }, 3000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive]);

  const autoIncrement = () => {
    setCurrentImageIndex((prevIndex) => modFloor(prevIndex + 1, images.length));
  };

  const resetInterval = () => {
    setIsActive(false);
    delay(3000).then(() => setIsActive(true));
  };

  return (
    <Layout>
      <MetaTags title="Produced by RGT - Real Good Touring"></MetaTags>

      <section id="main" className={styles.main}>
        <div className="container">
          <h1>Production Shots</h1>
          <div id="curtains" className={styles.curtains}>
            <a
              className={styles.prev}
              onClick={() => {
                resetInterval();
                setCurrentImageIndex(
                  modFloor(currentImageIndex - 1, images.length)
                );
              }}
              id="prev"
            >
              Prev
            </a>
            <a
              className={styles.next}
              onClick={() => {
                resetInterval();
                setCurrentImageIndex(
                  modFloor(currentImageIndex + 1, images.length)
                );
              }}
              id="next"
            >
              Next
            </a>
            <div id="stage" className={styles.stage}>
              {images.map((x, i) => (
                <img
                  className={`${
                    i === currentImageIndex ? styles.visible : ""
                  } ${x.group}`}
                  src={x.src}
                  alt={x.alt}
                  placeholder="tracedSVG"
                />
              ))}
            </div>
          </div>
          <div id="caption" className={styles.caption}>
            {images[currentImageIndex].alt}
          </div>
          <div id="galleryGroups" className={styles.galleryGroups}>
            <a
              id="unas-group"
              onClick={() => {
                resetInterval();
                setCurrentImageIndex(
                  images.indexOf(images.find((x) => x.group === "unas-group"))
                );
              }}
            >
              Unus Annus
            </a>
            <a
              id="bright-group"
              onClick={() => {
                resetInterval();
                setCurrentImageIndex(
                  images.indexOf(images.find((x) => x.group === "bright-group"))
                );
              }}
            >
              Bright Spot
            </a>
            <a
              id="thankmas-group"
              onClick={() => {
                resetInterval();
                setCurrentImageIndex(
                  images.indexOf(
                    images.find((x) => x.group === "thankmas-group")
                  )
                );
              }}
            >
              Thankmas
            </a>
            <a
              id="witching-group"
              onClick={() => {
                resetInterval();
                setCurrentImageIndex(
                  images.indexOf(
                    images.find((x) => x.group === "witching-group")
                  )
                );
              }}
            >
              Witching Hour
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default ProducedByRgtPage;

function modFloor(a, n) {
  return ((a % n) + n) % n;
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
