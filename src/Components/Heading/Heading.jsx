import React from "react";
import "./Heading.scss";

function Heading({ extraClass, subtitle,title,description }) {
  return (
    <div className={`heading__container ${extraClass ? extraClass : ""}`}>
      {subtitle ? <span className="subtitle">{subtitle}</span> : null}
      <h1 className="title">{title}</h1>
      {description ? <p className="description">{description}</p> : null}
    </div>
  );
}

export default Heading;
