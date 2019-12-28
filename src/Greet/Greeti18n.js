import React, { Component } from "react";
import HoC from "./utility-i18n";
import { withTranslation } from "react-i18next";

class Greet extends Component {
  render() {
    const {
      utility: {
        hello: { first },
        where
      }
    } = this.props;

    return (
      <h1>
        {first},{where("Egypt")}
      </h1>
    );
  }
}

export default HoC(withTranslation()(Greet));
