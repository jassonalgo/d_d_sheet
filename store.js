import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './redux/reducer'

function createMiddlewares () {
  const middlewares = [
    thunkMiddleware
  ]

  return middlewares
}

export function initializeStore (initialState = {}) {
  const middlewares = createMiddlewares()
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
  )
}
