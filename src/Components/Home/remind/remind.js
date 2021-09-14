import React from "react";

import "./remind-styles.css";
import remindLogo from './remind-logo.svg';

export default class Remind extends React.Component {

  joinRemind() {
    window.open("https://www.remind.com/join/shscsc", "_blank")
  }
  render() {
    return (
      <div id="remind-section">
          <div id="remind-circle" onClick={this.joinRemind}>
              <img src={remindLogo} />
          </div>
          <div id="remind-text-container">
            <p id="remind-text">Click to Join Our Remind</p>
          </div>
      </div>
    );
  }
}
