import React from "react";

import arrow from "./arrow.svg";
import "./wwd-styles.css";

export default class WWD extends React.Component {
  render() {
    return (
      <div id="wwd-container">
        <div id="wwd-button">
          <p id="wwd-text">What We Do</p>
        </div>
        <div id="wwd-line"></div>
      </div>
    );
  }
}
