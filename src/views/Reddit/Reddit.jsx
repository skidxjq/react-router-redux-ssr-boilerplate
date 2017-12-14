import React from 'react'
import { connect } from 'react-redux'
import { getReddietNews } from './RedditAction'
class Reddit extends React.PureComponent {
  constructor(props) {
    super(props)
  }
  componentDidMount () {
    this.props.getReddietNews(this.props.category)
  }



  handleChange = (event) => {
    let value = event.target.value
    console.log(value)
    this.props.getReddietNews(value)

  }
  render () {
    const {
      category,
      list,
      isFetching
    } = this.props
    const categories = ['nodejs', 'reactjs', 'angular']
    return (
      <div className='page-reddit'>
          
        <h5>这个页面是异步获取reddit.com的数据，并通过select切换发送请求，请求的结果是reddit上的相关关键词的技术文章标题列表</h5>
        <select onChange={this.handleChange.bind(this)} value={category} disabled={isFetching}>
          {categories.map(((item, index) => {
            return (
              <option value={item} key={index} >{item}</option>
            )
          }))}
        </select>
        {isFetching && (<h3>正在加载中.....</h3>)}
        <ul>
          {
            list.map((record, index) => {
              return (
                <li key={index}>
                  {index}. {record.data.title}
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

function mapStateToProps (state) {
  const { reddit } = state
  return {
    ...reddit
  }
}

export default connect(mapStateToProps, {
  getReddietNews
})(Reddit)