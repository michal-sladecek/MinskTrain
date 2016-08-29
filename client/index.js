import React from 'react'
import { render } from 'react-dom'
import css from './styles/style.styl'

import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import store, { history } from './store'

import Menu from './components/Menu.js'
import Game from './components/Game.js'
import App from './containers/App.js'
const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Menu}/>
                <Route path="/game/:level" component={Game}/>
            </Route>
        </Router>
    </Provider>
)

render(router, document.getElementById('root'))