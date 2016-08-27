import levels from './levels'
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({levels, routing: routerReducer });

export default rootReducer