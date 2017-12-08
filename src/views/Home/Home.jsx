import React from 'react'
import { Route } from 'react-router'
export default class Home extends React.Component {
  render () {
    console.log(this.props)
    return (
      <div className='page page-Home'>
        <h1>Home</h1>
      </div>
    )
  }
}


