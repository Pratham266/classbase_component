import React, { Component } from 'react'
import CompB from './CompB'
import CompD from './CompD'

export default class CompC extends Component {
  render() {
    return (
      <div>
        <h1>Comp C</h1>
        <CompB/>
        <CompD/>
      </div>
    )
  }
}
