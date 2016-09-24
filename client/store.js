import { createStore, compose , applyMiddleware} from 'redux'
import { syncHistoryWithStore, routerMiddleware} from 'react-router-redux'
import { browserHistory } from 'react-router'
import thunk from 'redux-thunk'
import rootReducer from './reducers/root'

const middleware = routerMiddleware(browserHistory)
const store = createStore(rootReducer, compose(applyMiddleware(thunk), applyMiddleware(middleware)
, window.devToolsExtension && window.devToolsExtension()));

export const history = syncHistoryWithStore(browserHistory, store);

export default store;