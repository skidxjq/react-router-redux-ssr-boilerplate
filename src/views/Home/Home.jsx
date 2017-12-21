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
        <h3>大扎好，我系轱天乐，我四渣渣辉，探挽懒月，介四里没有挽过的船新版本，挤需体验三番钟，里造会干我一样，爱象节款游戏。 </h3>
        <div><img src={require('./imgs/zzh.jpg')} /></div>
        <h3>读取接口数据</h3>
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
