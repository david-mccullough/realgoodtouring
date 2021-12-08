import CMS from "netlify-cms-app";
import React from "react";
import { remark } from "remark";
import remarkHtml from "remark-html";
import "../styles/global.css";
import Collapsible from "../components/Collapsible";

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
