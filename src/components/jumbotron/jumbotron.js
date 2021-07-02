import React from "react";
import "./jumbotron.css";

function Jumbotron(props) {
  return (
    <div className="Jumbotron__Container">
      <div
        className="jumbotron__main"
        style={{ backgroundImage: `url(${props.image})` }}
      >
        <div className="jumbotron__content">
          <h1 className="jumbotron__title">
            <strong>{props.headline}</strong>
          </h1>
          <p className="jumbotron__subtitle">{props.subtitle}</p>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;