import React from "react";
import * as styles from "./Tour.module.css";
import * as dayjs from "dayjs";
import dayjsPluginUTC from "dayjs-plugin-utc";
dayjs.extend(dayjsPluginUTC);

function Show(props) {
  return (
    <li className={styles.item}>
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
        <div className={styles.soldOut}>Sold Out</div>
      ) : (
        <a href={props.ticketsLink} className={styles.button + " button"}>
          Tickets
        </a>
      )}
    </li>
  );
}

export default Show;
