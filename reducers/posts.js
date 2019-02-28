import {FETCHING_POSTS, FETCHING_POSTS_SUCCESS, FETCHING_PEOPLE_FAILURE, CLEAR_POSTS} from '../constants/Strings';

const INITIAL_STATE = {
    posts: [],
    postsFetching: false,
    possible_posts: [
        'Hackathon',
        'HackCU',
        'CU StartUps'
    ],
    error: false
    
};

export default function postReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCHING_POSTS: {
            return {
                ...state,
                postsFetching: true,
                posts: []

            }
        }
        case FETCHING_POSTS_SUCCESS: {
            return {
                ...state,
                postsFetching: false,
                posts: action.data

            }
        }
        case FETCHING_PEOPLE_FAILURE:{
            // TO DO: Create Error Handler
            return {
                ...state,
                error: true
            }
        }
        case CLEAR_POSTS: {
            return {
                ...state,
                posts: []
            }
        }
        default:
          return state
    }
};

