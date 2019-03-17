import {FETCHING_COMPANY} from '../constants/Strings';

const INITIAL_STATE = {
    company: [],
    companyFetching: false,
    error: false
    
};

export default function postReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCHING_COMPANY: {
            return {
                ...state,
                companyFetching: true,
                company: []
            }
        }
        default:
          return state
    }
};

