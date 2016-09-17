import { createStore, compose , applyMiddleware} from 'redux'
import { syncHistoryWithStore} from 'react-router-redux'
import { browserHistory } from 'react-router'
import thunk from 'redux-thunk'
import rootReducer from './reducers/root'

const store = createStore(rootReducer, compose(applyMiddleware(thunk)
, window.devToolsExtension && window.devToolsExtension()));

export const history = syncHistoryWithStore(browserHistory, store);

export default store;