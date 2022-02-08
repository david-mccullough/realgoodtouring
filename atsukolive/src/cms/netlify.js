import CMS from "netlify-cms-app";
import React from "react";
import { remark } from "remark";
import remarkHtml from "remark-html";
import "../styles/global.css";
import Tour from "../components/Tour";

// function mdStringToHTML(mdString) {
//   if (mdString)
//     return remark().use(remarkHtml).processSync(mdString).toString();
//   else return "";
// }

const TourPreview = ({ entry, widgetFor, widgetsFor, getAsset }) => {
  if (!entry) return;

  let tour = {};
  tour.title = entry.getIn(["data", "title"]);
  tour.events = widgetsFor("events").map(function (show, index) {
    return {
      ticketsLink: show.getIn(["data", "ticketsLink"]),
      venueName: show.getIn(["data", "venueName"]),
      date: show.getIn(["data", "date"]),
      location: show.getIn(["data", "location"]),
      isSoldOut: show.getIn(["data", "isSoldOut"]),
      note: show.getIn(["data", "note"]),
    };
  });
  return (
    <body>
      <div className="container">
        <ul>
          <Tour tour={tour} />
        </ul>
      </div>
    </body>
  );
};

CMS.registerPreviewTemplate("tour", TourPreview);
