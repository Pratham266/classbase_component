import React, { Component } from "react";
import MouseHover from "./MouseHover";
import ClickCounter from "./ClickCounter";

class HOC extends Component {  
render() {
    return (
      <div>
        <h1>HOC EXAMPLE</h1>
        <MouseHover hoverDemo = "hover prop"/>
        <br />
        <br />
        <ClickCounter clickDemo = "click prop"/>
      </div>
    );
  }
}

export default HOC;
