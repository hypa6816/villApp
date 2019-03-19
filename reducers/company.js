import {FETCHING_COMPANY, FETCHING_COMPANY_SUCCESS} from '../constants/Strings';

const INITIAL_STATE = {
    company: [],
    companyFetching: false,
    error: false
    
};

export default function companyReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCHING_COMPANY: {
            return {
                ...state,
                companyFetching: true,
                company: []
            }
        }
        case FETCHING_COMPANY_SUCCESS: {
            return{
                ...state,
                company: action.data,
                companyFetching: false,
                error: false,
            }
        }
        default:
          return state
    }
};

