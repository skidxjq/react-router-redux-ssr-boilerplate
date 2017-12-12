import React from 'react'
import { Route } from 'react-router'
import { connect } from 'react-redux'
import { updateHomeNews } from './HomeAction'
console.log(updateHomeNews)
class Home extends React.Component {
  componentDidMount () {
    // console.log(socket)
    const self = this
    const {
      socket
    } = window
    socket.on('news', (data) => {
      console.log(data)
      self.props.updateHomeNews(data)
    })
  }
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
export default connect(mapStateToProps, {
  updateHomeNews
})(Home)