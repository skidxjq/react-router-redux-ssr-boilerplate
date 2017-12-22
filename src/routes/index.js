import React, { Component } from 'react'
import { Route, Redirect, NavLink } from 'react-router-dom'
import io from 'socket.io-client'
import asyncComponent from './async'
import socket from '../utils/socket'
import '../style/app.css'
const Home = asyncComponent(() => {
  return System.import('../views/Home')
})

const Profile = asyncComponent(() => {
  return System.import('../views/Profile')
})
const About = asyncComponent(() => {
  return System.import('../views/About')
})

const Reddit = asyncComponent(() => {
  return System.import('../views/Reddit')
})

export default class AppRoutes extends Component {
  componentDidMount () {
    window.socket = socket()
  }
  render () {
    const {
      location
    } = this.props

    return (
      <div className='app'>
        <div>
          <NavLink
            to='/'
            exact
            activeClassName='active'
            className='link'>
            Home
          </NavLink>
          <NavLink
            to='/about'
            activeClassName='active'
            className='link'>
            About
          </NavLink>
          <NavLink
            to='/profile'
            className='link'
            activeClassName='active'>
            Profile
          </NavLink>
          <NavLink
            to='/reddit'
            className='link'
            activeClassName='active'>
            Reddit
          </NavLink>
        </div>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/reddit' component={Reddit} />
      </div>
    )
  }
}
