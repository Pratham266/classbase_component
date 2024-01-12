import React, { Component } from 'react'
import { UserConsumer } from '../context/uercontext'

export default class CompA extends Component {
  render() {
    return (
        <>
      <UserConsumer>
        {context =>{
            return <div>Hello {context.user.name} and your Department : {context.user.department}</div>
        }}
      </UserConsumer>
      </>
    )
  }
}
