import React from "react";
import * as dayjs from "dayjs";

function Show(props) {
  return (
    <li>
      <div class="event-info">
        <time>{dayjs(props.date).format("ddd MM/DD")}</time>
        <address>
          {props.location} <span class="bullet">|</span> {props.venueName}
        </address>
      </div>
      {props.isSoldOut ? (
        <p class="sold-out">Sold Out</p>
      ) : (
        <a href={props.ticketLink} class="button">
          Tickets
        </a>
      )}
    </li>
  );
}

export default Show;
