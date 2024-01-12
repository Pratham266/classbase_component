import React, { Component } from 'react'
import { UserConsumer } from '../context/uercontext'

export default class CompA extends Component {
  render() {
    return (
        <>
       <h1> Com A</h1>
      <UserConsumer>
        {username =>{
            return <div>Hello {username.name} and your department is {username.department}</div>
        }}
      </UserConsumer>
      
      </>
    )
  }
}
