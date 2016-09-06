import levels from './levels'
import tools from './tools'
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({levels, tools, routing: routerReducer });

export default rootReducer