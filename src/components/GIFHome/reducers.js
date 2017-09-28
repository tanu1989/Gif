import React from 'react';
import * as actions from './actions';

export const searchTermInitialState = '';

// gif reducer
export const initialGifState = {
    loading: false,
    error: false,
    errorDetail: null,
    gifs: null,
    searchTerm: searchTermInitialState,
    prevSearchTerm: searchTermInitialState
}

export function reduceFetchGif(state, action){

    let newSearchTerm;
    // Check if searchTerm changed
    const defaultSearchTerm = state.searchTerm || '';
    if (typeof action.searchTerm === 'string') {
        newSearchTerm = action.searchTerm;
    } else {
        newSearchTerm = defaultSearchTerm;
    }
    return {
        ...state,
        searchTerm: newSearchTerm,
        prevSearchTerm: state.searchTerm,
        loading: true
    }
}

export function reduceFetchGifSuccess(state, action) {
    return {
        ...state,
        loading: false,
        gifs: action.payload,
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

export const gifs = (state = initialGifState, action) =>{
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

export default gifs;

