import { combineReducers } from 'redux';
import * as actions from './actions';

export const initialLocationState = {
    location: null,
    cameFromChildRoute: false,
    prevLocation: null
};

export const location = function location(
    state = initialLocationState,
    action
) {
    if (action.type === 'FETCH_LOCATION') {
        return {
            ...state,
            location: action.payload,
            prevLocation: state.location,
            cameFromChildRoute:
            state.location &&
            state.location.pathname.indexOf(action.payload.pathname) === 0
        };
    }
    return state;
};
// gif reducer
export const initialGifState = {
    loading: false,
    error: false,
    errorDetail: null,
    gifs: null
}

export function reduceFetchGif(state, action){
    return {
        ...state,
        loading: true
    }
}

export function reduceFetchGifSuccess(state, action) {
    return {
        ...state,
        loading: false,
        gifs: action.payload
    }
}

export function reduceFetchGifError(state, action) {
    return {
        ...state,
        loading: false,
        error: true,
        errorDetail: action.payload
    }
}

export const gif = (state = initialGifState, action) =>{
    switch(action.type){
        case actions.FETCH_GIF:
            return reduceFetchGif(state, action);
        case actions.FETCH_GIF_SUCCESS:
            return reduceFetchGifSuccess(state, action);
        case actions.FETCH_GIF_ERROR:
            return reduceFetchGifError(state, action);
        default:
            return {
                ...initialGifState
            }
    }
}

export default combineReducers({
    location,
    gif

});