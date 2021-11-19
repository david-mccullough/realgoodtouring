import React from "react";
import Show from "./Show";

function Tour(props) {
  <li>
    <div class="poster">
      <img src={`assets/tourPosterThumbs/${image}`} alt={props.image} />
    </div>
    <div class="details">
      <h3>{props.title}</h3>
      <div class="floating-date">{props.year}</div>

      <ul>
        {props.shows.map((show) => (
          <Show
            ticketLink={show.ticketLink}
            venueName={show.venueName}
            date={show.date}
            location={show.location}
            isSoldOut={show.isSoludOut}
          />
        ))}
      </ul>
    </div>
  </li>;
}

export default Tour;
