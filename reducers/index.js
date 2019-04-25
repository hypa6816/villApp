import { combineReducers } from 'redux'
import posts from './posts'
import company from './company'
import auth from './auth'

const rootReducer = combineReducers({
    posts,
    company,
    auth
})

export default rootReducer