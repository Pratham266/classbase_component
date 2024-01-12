import React, { Component } from "react";
// import MouseHover from "./MouseHover";
import UpdatedComponent from "./withCounterHOC.jsx";

class ClickCounter extends Component {
  

  render() {
    const { count,incrementCount } = this.props;
    return (
      <div>
        <h5>{this.props.clickDemo}</h5>
        <button onClick={incrementCount}>{this.props.name} - Clicked {count} times(increment by 5)</button>
        <br />
      </div>
    );
  }
}

export default UpdatedComponent(ClickCounter,5)
