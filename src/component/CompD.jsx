import React, { Component } from "react";
import UserContext from "../context/uercontext";

export default class CompD extends Component {
  static contextType = UserContext;

  componentDidMount() {
    console.log("Contetx  :", this.context);
  }
  render() {
    const { name, department } = this.context;
    return (
      <div>
        <h1>Comp D </h1>
        <h5>
          Using the static contextType : {name},{department}
        </h5>
      </div>
    );
  }
}
