import {
  applyMiddleware,
  compose,
  createStore as reduxCreateStore,
} from 'redux'
import { createBrowserHistory } from 'history'
import { createLogger } from 'redux-logger'
import rootReducer from './rootReducer'
import { getRRFProps } from './firebase.setup'

const loggerMiddleware = (createLogger as any)()
const composeEnhancers =
  (window as any)['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose

export const history = createBrowserHistory()

const createStore = (preloadedState = {}) => {
  const middlewares = []

  if (process.env.NODE_ENV === 'development') {
    middlewares.push(loggerMiddleware)
  }

  const store = reduxCreateStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware.apply(null, middlewares))
  )

  return store
}

export const store = createStore()
export type Store = typeof store
export const rrfProps = getRRFProps(store)
