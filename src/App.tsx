import * as React from 'react'
import { Router } from 'react-router'
import { Switch, Route } from 'react-router-dom'
import Candidates from './pages/candidates'
import { store, history, rrfProps } from './redux/store'
import { Provider } from 'react-redux'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { BaseStyle } from './assets/styles/join.css'

const App: React.FC = () => {
  return (
    <>
      <BaseStyle />
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <Router history={history}>
            <Switch>
              <Route exact path="/" component={Candidates} />
            </Switch>
          </Router>
        </ReactReduxFirebaseProvider>
      </Provider>
    </>
  )
}

export default App
