import { DISPLAY_DATA, FILTER_DATA, NEXT_DATA } from '../actions/types';

export default function(state = {}, action) {
    switch (action.type) {
        case DISPLAY_DATA:
            return { ...state, data: action.payload, page: 1 };
        case FILTER_DATA:
            return { ...state, data: action.payload, page: 1 };
        case NEXT_DATA:
            return {...state, page: action.payload};
    }
    return state;
}
