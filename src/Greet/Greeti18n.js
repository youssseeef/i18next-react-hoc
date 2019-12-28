import React, { Component } from "react";
import HoC from "./utility-i18n";
import { withTranslation } from "react-i18next";

class Greet extends Component {
  render() {
    return (
      <h1>
        {this.props.utility.hello.first},{this.props.utility.where("Egypt")}
      </h1>
    );
  }
}

export default HoC(withTranslation()(Greet));
