import React from 'react'
import { Route } from 'react-router'
import { connect } from 'react-redux'
class Home extends React.Component {
  render () {
    console.log('Home render')
    const {
      news
    } = this.props
    return (
      <div className='page page-Home'>
        <h1>Home</h1>
        <ul>
          {news.map((item, index) => {
            return (
              <li key={index}>{item.title}</li>
            )
          })}
        </ul>
      </div>

    )
  }
}

function mapStateToProps (state) {
  return {
    ...state.home
  }
}
export default connect(mapStateToProps)(Home)