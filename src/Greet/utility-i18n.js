import * as utility from "./utility";
import React, { Fragment, Component } from "react";

export default function Hoc(HocComponent) {
  return class extends Component {
    render() {
      return <Fragment>{<HocComponent utility={utility} />}</Fragment>;
    }
  };
}
