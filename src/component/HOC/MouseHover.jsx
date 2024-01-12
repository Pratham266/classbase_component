import React, { Component } from 'react'
import UpdatedComponent from './withCounterHOC.jsx'

class MouseHover extends Component {
 
  render() {
    const { count,incrementCount } = this.props;
    return (
      <div>
        <h5>{this.props.hoverDemo}</h5>
        <button onMouseOver={incrementCount}>{this.props.name} - Hovered {count} times(increment by 10)</button>        
      </div>
    )
  }
}

export default UpdatedComponent(MouseHover,10)