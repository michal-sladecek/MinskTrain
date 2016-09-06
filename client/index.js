import React from 'react'
import { render } from 'react-dom'
import css from './styles/style.styl'

import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import store, { history } from './store'

import MenuContainer from './containers/MenuContainer.js'
import Game from './components/Game.js'
import App from './components/App.js'
const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={MenuContainer}/>
                <Route path="/game/:level" component={Game}/>
            </Route>
        </Router>
    </Provider>
)

render(router, document.getElementById('root'))