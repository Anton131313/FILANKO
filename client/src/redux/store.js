import { createStore, applyMiddleware } from 'redux';
import initState from './initState';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk'

const store = createStore(
  rootReducer,
  initState,
  applyMiddleware(thunk)
)

export default store
