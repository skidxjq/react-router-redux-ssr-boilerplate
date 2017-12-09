import React, { Component } from 'react'
import { Route, Redirect } from 'react-router'

import asyncComponent from './async'
const Home = asyncComponent(() => {
  return System.import('../views/Home')
})

const Profile = asyncComponent(() => {
  return System.import('../views/Profile')
})
const About = asyncComponent(() => {
  return System.import('../views/About')
})

export default class AppRoutes extends Component {
  render () {
    const {
      location
    } = this.props
    return (
      <div>
        <h3>大家好，我系渣渣辉</h3>
        <Route path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/profile' component={Profile} />
      </div>
    )
  }
}