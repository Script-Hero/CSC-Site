import React from "react";

import Header from "./header/header";
import Remind from "./remind/remind";
import WWD from "./wwd/wwd";
import Carousel from "./carousel/carousel";
import Footer from "./Footer/footer";

import "./home-styles.css";

import GoMobile from "../../Components/GoMobile/gomobile";

export default class Home extends React.Component {

  constructor(props){
    super(props);
    this.state = {width: window.screen.width}
  }

  updateDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };
  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  render() {
    var isMobile = this.state.width < 1280;

    var toDisplay = <div></div>;
    if (!isMobile) {
      var toDisplay = <GoMobile />;
    } else if (isMobile){
      var toDisplay = ( <div id="home-container">
      <Header />
      <WWD />
      <Carousel />
      <Remind />
      <Footer />
    </div>);
    }

    return (
      <div>
        {toDisplay}
      </div>
    );
  }
}
