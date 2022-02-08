import React from "react";
import * as dayjs from "dayjs";
import dayjsPluginUTC from "dayjs-plugin-utc";
dayjs.extend(dayjsPluginUTC);

function Show(props) {
  return (
    <li>
      <div className="date">
        {(!props.date && "TBA") || dayjs(props.date).format("MMM D")}
      </div>
      <div className="venue">
        <p>{props.location}</p>
        <h3>{props.venueName}</h3>
        {props.note && props.note !== "" && (
          <div
            style={{
              color: "#f3c8cd",
              marginRight: "1em",
              whiteSpace: "break-spaces",
            }}
          >
            {props.note}
          </div>
        )}
      </div>
      {props.isSoldOut ? (
        <div className="tickets">Sold Out</div>
      ) : (
        <a href={props.ticketsLink} className="tickets">
          Tickets
        </a>
      )}
    </li>
  );
}

export default Show;
