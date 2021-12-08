import CMS from "netlify-cms-app";
import React from "react";
import { remark } from "remark";
import remarkHtml from "remark-html";
import "../styles/global.css";
import Collapsible from "../components/Collapsible";
import Header from "../components/Header";
import Tour from "../components/Tour";

function mdStringToHTML(mdString) {
  if (mdString)
    return remark().use(remarkHtml).processSync(mdString).toString();
  else return "";
}

const VipPreview = ({ entry, widgetFor, widgetsFor }) => {
  return (
    <body>
      <div className="container">
        <h2
          className="eyebrow"
          style={{ marginTop: "100px", marginBottom: "50px" }}
        >
          {"VIP Q&A"}
        </h2>
        <div>
          {widgetsFor("sections").map(function (section, index) {
            if (section !== undefined)
              return (
                <Collapsible
                  key={index}
                  outerText={section.getIn(["data", "question"])}
                >
                  {
                    <div
                      dangerouslySetInnerHTML={{
                        __html: mdStringToHTML(
                          section.getIn(["data", "answerMarkdown"])
                        ),
                      }}
                    />
                  }
                </Collapsible>
              );
            <div></div>;
            return <></>;
          })}
        </div>
      </div>
    </body>
  );
};

CMS.registerPreviewTemplate("vip", VipPreview);

const TourPreview = ({ entry, widgetFor, widgetsFor, getAsset }) => {
  if (!entry) return;

  let tour = {};
  tour.title = entry.getIn(["data", "title"]);
  // tour.Image = getAsset(entry.getIn(["data", "Image"]));
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
      <Header isHeaderFixed={true} />
      <div className="container">
        <ul className="date-list">
          <Tour tour={tour} />
        </ul>
      </div>
    </body>
  );
};

CMS.registerPreviewTemplate("tour", TourPreview);
