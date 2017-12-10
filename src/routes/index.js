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
        <h3>大扎好，我系轱天乐，我四渣渣辉，探挽懒月，介四里没有挽过的船新版本，挤需体验三番钟，里造会干我一样，爱象节款游戏。 </h3>
        <Route path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/profile' component={Profile} />
      </div>
    )
  }
}