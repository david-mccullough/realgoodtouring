import React from "react";
import * as dayjs from "dayjs";
import "../styles/index.css";

function Show(props) {
  return (
    <li>
      <div className="event-info">
        <time>{dayjs(props.date).format("ddd M/D")}</time>
        <address>
          {props.location} <span className="bullet">|</span> {props.venueName}
          {props.note && props.note != "" && (
            <small>
              <br />
              {props.note}
            </small>
          )}
        </address>
      </div>
      {props.isSoldOut ? (
        <div className="sold-out">Sold Out</div>
      ) : (
        <a href={props.ticketsLink} className="button">
          Tickets
        </a>
      )}
    </li>
  );
}

export default Show;
