import { createStore, compose , applyMiddleware} from 'redux'
import { syncHistoryWithStore, routerMiddleware} from 'react-router-redux'
import { browserHistory } from 'react-router'
import thunk from 'redux-thunk'
import rootReducer from './reducers/root'

const devToolsMiddleware = window.devToolsExtension ? window.devToolsExtension() : (x) => x

const store = createStore(rootReducer, compose(
  applyMiddleware(thunk),
  applyMiddleware(routerMiddleware(browserHistory)),
  devToolsMiddleware)
);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
