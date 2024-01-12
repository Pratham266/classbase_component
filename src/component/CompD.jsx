import React, { Component } from "react";
import UserContext from "../context/uercontext";

export default class CompD extends Component {
  static contextType = UserContext;

  constructor(props) {
    super(props);
    this.state = {
      user: { name: "", department: "" },
    };
  }

  handleInput = (e) => {
    this.setState((prevState, prevProps) => {
      return {
        ...prevState,
        user: { ...prevState.user, [e.target.name]: e.target.value },
      };
    });
  };

  componentDidMount() {
    console.log("state : ", this.state);
  }

  render() {
    const { user, handleUserData } = this.context;

    return (
      <div>
        <h1>Comp D </h1>
        <h5>
          Using the static contextType : {user.name},{user.department}
        </h5>

        <label htmlFor="name">Name :</label>
        <input type="text" name="name" id="name" onChange={this.handleInput} />
        &nbsp;
        <label htmlFor="department">Department : </label>
        
        <input
          type="text"
          name="department"
          id="department"
          onChange={this.handleInput}
        />
        <br /><br />
        <button onClick={() => handleUserData(this.state.user)}>
          Update the Context
        </button>
      </div>
    );
  }
}
