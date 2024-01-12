import React, { Component } from 'react'
import CompA from './CompA'

export default class CompB extends Component {
  render() {
    return (
      <div>
       <h1>Comp B</h1>
        <CompA/>
      </div>
    )
  }
}
