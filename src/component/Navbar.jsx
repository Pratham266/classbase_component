import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <div>
        <Link to="/">Home </Link>
        <Link to="/toggle">Toggle </Link>
        <Link to="/about">About </Link>
        <Link to="/context">Context </Link>
        <Link to="/hoc">HOC </Link>
      </div>
    )
  }
}

export default Navbar
