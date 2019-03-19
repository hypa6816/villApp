import { combineReducers } from 'redux'
import posts from './posts'
import company from './company'

const rootReducer = combineReducers({
    posts,
    company
})

export default rootReducer