import * as React from "react";
import CollapsibleModule from "react-collapsible";
import * as collapsibleStyles from "../components/Collapsible.module.css";

const Collapsible = ({ outerText, children }) => {
  return (
    <CollapsibleModule
      className={collapsibleStyles.collapsible}
      openedClassName={collapsibleStyles.collapsibleOpen}
      contentInnerClassName={collapsibleStyles.collapsibleInner}
      trigger={
        <div className={collapsibleStyles.trigger}>
          <h3 style={{ width: "100%" }}>{outerText}</h3>
          <img
            src="../img/expandArrow.svg"
            alt="expand arrow"
            className={collapsibleStyles.caret}
            width={24}
          ></img>
        </div>
      }
      easing="ease"
    >
      {children}
    </CollapsibleModule>
  );
};
export default Collapsible;
