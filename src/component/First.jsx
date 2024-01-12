import React, { useState } from "react";
import '../App.css';
import Profile from "./Profile";
import ToggleEvent from "./ToggleEvent";

class First extends React.Component {

  constructor(props) {
    super(props);
    // console.log("constructor");
    this.inputref = React.createRef();

    this.state = {
      count: 0,
      name:"Demo Class",
    };
  }

  componentDidMount(){
    // console.log("componentDidMount");
    this.inputref.current.focus();
  }

  componentDidUpdate(prevProps,prevState){
    console.log("componentDidUpdate",prevState);
    if(this.state.count === 3 && prevState.count !== 3){
      this.setState({
        name:`Hey Rich to ${3}!`
      })
    }

  }

  handleAdd =()=>{
    this.setState((state,prop)=>({ count: state.count + 1 }))
  }

  render() {
    console.log("render");
    return (
      <>
        <h1>{this.state.name}</h1>
        <h1>Count : {this.state.count}</h1>
        <button onClick={this.handleAdd}>
          ADD-1
        </button>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          SUB-1
        </button>
        <br/>
        <br/>
        
        <label>Focu element using Rect.ref(useRef)</label>
        <input ref={this.inputref} />
        <br/>
        <br/>

      {/* when using a htmlFor it's activate form and also whne use give a
       htmlFor into the label at that time when the user clickes on the label the input filed to that labels id is focused   
       */}
       
       <form> 
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />
      </form>

        <Profile name={"Pratham Barot"} email={"barot12@gmail.com"} />
      </>
    );
  }
}

export default First;
