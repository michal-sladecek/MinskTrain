import React from 'react'
import { render } from 'react-dom'
import css from './styles/style.styl'

import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import store, { history } from './store'

import testing from './components/testing'
const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={testing}>
          {/*  <IndexRoute component={testing}></IndexRoute> */}
            </Route>
        </Router>
    </Provider>
)

render(router, document.getElementById('root'))