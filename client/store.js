import { createStore, compose } from 'redux'
import { syncHistoryWithStore} from 'react-router-redux'
import { browserHistory } from 'react-router'

import rootReducer from './reducers/root'

const store = createStore(rootReducer, window.devToolsExtension && window.devToolsExtension());

export const history = syncHistoryWithStore(browserHistory, store);

export default store;