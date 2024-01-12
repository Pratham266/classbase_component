import React from "react";

class ToggleEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: true,
    };
    this.handleClickRegFun = this.handleClickRegFun.bind(this);
  }
  handleClickRegFun() {
    this.setState((prevState) => ({
      toggle: !prevState.toggle,
    }));
  }
  handleClick = () => {
    console.log("yes in handleclick");
    this.setState((prevState) => ({
      toggle: !prevState.toggle,
    }));
  };

  render() {
    return (
      <>
        <button onClick={this.handleClick}>
          <h1>{this.state.toggle ? "ON" : "OF"}</h1>
        </button>
        <br />
        <button onClick={this.handleClickRegFun}>
          <h1>{this.state.toggle ? " regular fun ON" : "regular fun OF"}</h1>
        </button>
      </>
    );
  }
}
export default ToggleEvent;
