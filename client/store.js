import { createStore, compose } from 'redux'
import { syncHistoryWithStore} from 'react-router-redux'
import { browserHistory } from 'react-router'

import rootReducer from './reducers/root'

import levels from './data/levels'
import tools from './data/tools'
const defaultState = {
    levels,
    tools
}
const store = createStore(rootReducer, defaultState, window.devToolsExtension && window.devToolsExtension());

export const history = syncHistoryWithStore(browserHistory, store);

export default store;