import React from 'react'
import { ConnectedRouter } from 'react-router-redux'
import { Route } from 'react-router'
import AppRoutes from '../src/routes'
// import '../src/style/reset.css'

export default class AppContainer extends React.PureComponent {
  render () {
    const {
      history
    } = this.props

    return (
      <ConnectedRouter
        history={history}>
        <Route
          render={(location) => {
            return (
              <AppRoutes location={location} />
            )
          }} />
      </ConnectedRouter>
    )
  }
}
// export default class App extends React.PureComponent {
//   render () {
//     const { history } = this.props
//     return (
//       <div history={history}>
//         hahaeee
//       </div>
//     )
//   }
// }