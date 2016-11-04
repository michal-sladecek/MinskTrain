import { createStore, compose , applyMiddleware} from 'redux'
import { syncHistoryWithStore, routerMiddleware} from 'react-router-redux'
import { useRouterHistory } from 'react-router'
import { createHashHistory } from 'history'
import thunk from 'redux-thunk'
import rootReducer from './reducers/root'

const devToolsMiddleware = window.devToolsExtension ? window.devToolsExtension() : (x) => x

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

const store = createStore(rootReducer, compose(
  applyMiddleware(thunk),
  applyMiddleware(routerMiddleware(appHistory)),
  devToolsMiddleware)
);

export const history = syncHistoryWithStore(appHistory, store);

export default store;
