import React from 'react'
import { Link, Route } from 'react-router-dom'
import { connect } from 'react-redux'
class Profile extends React.Component {
  render () {
    const {
      match
    } = this.props
    return (
      <div className='page page-Profile'>
        <h4>this is {this.props.name}'s profile</h4>
        
        <ul>
          <li>
            <h4>your  career</h4>
            <div>{this.props.career}</div> 
          </li>
          <li>
            <h4>your  age</h4>
            <div>{this.props.age}</div> 
          </li>
        </ul>
        {/* {/* <Link to={`${match.url}/age`}>show  age</Link> */}
        {this.props.children}
      </div>
    )
  }
}


function mapStateToProps (state) {
  return {
    ...state.profile
  }
}

export default connect(mapStateToProps)(Profile)