import React, { FC } from 'react'
import { Router } from 'react-router'
import { Switch, Route } from 'react-router-dom'
import Candidates from './pages/apply/candidates'
import { store, history, rrfProps } from './redux/store'
import { Provider } from 'react-redux'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'

const App: FC = () => {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <Router history={history}>
          <Switch>
            <Route exact path="/">
              <Candidates />
            </Route>
          </Switch>
        </Router>
      </ReactReduxFirebaseProvider>
    </Provider>
  )
}

export default App
