import React from 'react'
import { render } from 'react-dom'
import css from './styles/style.styl'

import { Router, Route, IndexRedirect, Redirect} from 'react-router'
import { Provider } from 'react-redux'
import store, { history } from './store'

import MenuContainer from './containers/MenuContainer.js'
import GameContainer from './containers/GameContainer.js'
import AppContainer from './containers/AppContainer.js'


const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={AppContainer}>
        <IndexRedirect to="/levels" />
        <Route path="levels" component={MenuContainer}/>
        <Route path="game/:level" component={GameContainer}/>
        <Redirect from="*" to="/" />
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'))
