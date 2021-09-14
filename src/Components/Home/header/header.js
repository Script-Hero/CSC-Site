import React from "react";

import "./header-styles.css";
import background from "./header-background.svg";

export default class Header extends React.Component {
  render() {
    return (
      <div id="header">
        <img src={background} id="background-svg" />
        <div id="shs-pill" class="header-pill">
          <h1 id="shs-pill-text">SHS</h1>
        </div>

        <div id="csc-pill-container">
          <div id="csc-pill" class="header-pill">
            <h1 id="csc-pill-text">Computer Science Club</h1>
          </div>
        </div>
      </div>
    );
  }
}
