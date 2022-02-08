import React from "react";
import Show from "./Show";
import * as dayjs from "dayjs";
import dayjsPluginUTC from "dayjs-plugin-utc";
dayjs.extend(dayjsPluginUTC);

const Tour = (props) => {
  let years = [
    ...new Set(
      props.tour.events.map((show) => {
        if (show.date) return new dayjs(show.date).year();
        else return 2022;
      })
    ),
  ];

  let yearDictionary = years.reduce(
    (a, x) => ({
      ...a,
      [x]: props.tour.events.filter((show) => {
        if (show.date) return new dayjs(show.date).year() == x;
        else if (x === 2022) return true;
        else return false;
      }),
    }),
    {}
  );

  let key = 0;
  return (
    <li>
      <div>
        {Object.keys(yearDictionary).map((year) => (
          <div key={year}>
            {/* <div className="floating-date">{year}</div> */}
            <ul>
              {yearDictionary[year].map((show) => (
                <Show
                  key={key++}
                  ticketsLink={show.ticketsLink}
                  venueName={show.venueName}
                  date={show.date}
                  location={show.location}
                  isSoldOut={show.isSoldOut}
                  note={show.note}
                />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </li>
  );
};

export default Tour;
