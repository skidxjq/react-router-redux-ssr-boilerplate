import React from 'react'
import { Route } from 'react-router'
export default class Home extends React.Component {
  render () {
    console.log('Home render')
    return (
      <div className='page page-Home'>
        <h1>Home</h1>
      </div>
    )
  }
}


