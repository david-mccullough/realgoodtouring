import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Show from "./Show";
import * as styles from "./Tour.module.css";

const Tour = (props) => {
  let years = [
    ...new Set(
      props.tour.events.map((show) => new Date(show.date).getFullYear())
    ),
  ];

  // let yearDictionary = years.reduce(
  //   (a, x) => ({
  //     ...a,
  //     [x]: props.tour.events.filter((show) => {
  //       console.log(new Date(show.date).getFullYear());
  //       console.log(x);
  //       console.log(new Date(show.date).getFullYear() == x);
  //       return new Date(show.date).getFullYear() == x;
  //     }),
  //   }),
  //   {}
  // );

  let yearDictionary = years.reduce(
    (a, x) => ({
      ...a,
      [x]: props.tour.events.filter((show) => {
        return new Date(show.date).getFullYear() == x;
      }),
    }),
    {}
  );

  return (
    <li className={styles.item}>
      <div className="poster">
        <div className="poster-img">
          <GatsbyImage
            image={getImage(props.tour.Image)}
            alt={props.tour.title}
            layout="constrained"
          />
        </div>
        {/* <img src={`/img/${props.tour.image}`} alt={props.tour.image} /> */}
      </div>
      <div className="details">
        <h3>{props.tour.title}</h3>
        {Object.keys(yearDictionary).map((year) => (
          <>
            <div className="floating-date">{year}</div>
            <ul>
              {yearDictionary[year].map((show) => (
                <Show
                  key={show.date}
                  ticketsLink={show.ticketsLink}
                  venueName={show.venueName}
                  date={show.date}
                  location={show.location}
                  isSoldOut={show.isSoldOut}
                  note={show.note}
                />
              ))}
            </ul>
          </>
        ))}
      </div>
    </li>
  );
};

export default Tour;
