import React from "react";
import "./carousel-styles.css";

import Card from "./card";
import Arrow from "../wwd/arrow.svg";

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.cardsData = [
      {
        title: "Compete",
        body: "The computer science club participates in many coding contests throughout the year, and we host our own Hackathon at Stratford. Prepare with the club, find teammates at the club, and win with the club.",
        color: "#39375B",
        class_: "card-1",
      },
      {
        title: "Volunteer",
        body: "The computer science club gives members access to many volunteering opportunities. Participate in LetsCode, an entirely student ran coding camp, or join us in teaching at FamilyPoint, or get involved in the CS community by helping the club host our annual Hackathon!",
        color: "#553C8B",
        class_: "card-2",
      },
      {
        title: "Tutor",
        body: "Need to improve in your CS classes? Get tutoring from students in the club! Want to give back? Come tutor for the club! The CS club is dedicated to being a space where everyone can get better at coding.",
        color: "#5D6EC7",
        class_: "card-3",
      },
      {
        title: "Collaborate",
        body: "Coding is better together. Find friends to work on projects together or experts in CS fields you want to learn at the CS club. The coding club helps set up teams for personal projects, coding contests, and even larger club-wide programs.",
        color: "#6155A6",
        class_: "card-4",
      },
    ];

    this.state = { current_index: 0, data: this.cardsData };

    this.inc = this.inc.bind(this);
    this.dec = this.dec.bind(this);
  }

  inc() {
    this.setState({
      current_index: (this.state.current_index + 1) % this.state.data.length,
    });
  }

  dec() {
    if (this.state.current_index - 1 < 0) {
      this.setState({ current_index: this.state.data.length -1});
    } else {
      this.setState({
        current_index: (this.state.current_index - 1) % this.state.data.length,
      });
    }
  }

  render() {
    let title = this.state.data[Math.abs(this.state.current_index)].title;
    let body = this.state.data[Math.abs(this.state.current_index)].body;
    let color = this.state.data[Math.abs(this.state.current_index)].color;
    let class_ = this.state.data[Math.abs(this.state.current_index)].class_;

    return (
      <div id="carousel-container">
        <div id="cards-container">
          <Card
            key={title}
            title={title}
            body={body}
            color={color}
            c={class_}
          />
        </div>

        <div id="controller-row">
          <div id="controller1" class="controller" onClick={this.dec}>
            <img src={Arrow} />
          </div>

          <div id="controller2" class="controller" onClick={this.inc}>
            <img src={Arrow} />
          </div>
        </div>
      </div>
    );
  }
}
