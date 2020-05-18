import React from 'react'
import { render } from '@testing-library/react'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import { store, history, rrfProps } from '../redux/store'

const Providers: React.FC = ({ children }) => {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <Router history={history}> {children}</Router>
      </ReactReduxFirebaseProvider>
    </Provider>
  )
}

const customRender = (ui: React.ElementType, options?: object) =>
  render(ui, {
    wrapper: Providers,
    ...options,
  })

export * from '@testing-library/react'

export { customRender as render }
