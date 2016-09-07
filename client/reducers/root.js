import game from './game'
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({game, routing: routerReducer });

export default rootReducer