import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Show from "./Show";
import "../styles/index.css";

const Tour = (props) => (
  <li>
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
      <div className="floating-date">{props.tour.year}</div>

      <ul>
        {props.tour.events.map((show) => (
          <Show
            key={show.date}
            ticketLink={show.ticketLink}
            venueName={show.venueName}
            date={show.date}
            location={show.location}
            isSoldOut={show.isSoldOut}
            note={show.note}
          />
        ))}
      </ul>
    </div>
  </li>
);

export default Tour;
