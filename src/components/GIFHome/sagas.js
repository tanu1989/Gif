import {fork, put, call, takeLatest, select} from 'redux-saga/effects';
import * as actions from './actions';
import axios from 'axios';
import { isEqual } from 'lodash'

const apiKey = 'XvVhi3HWMSrdcZ6RqLMC3twsKJ69RggN';

const baseUrl = `http://api.giphy.com/v1/gifs/search?api_key=${apiKey}`;

export const getGif = (state) => state.gifs;

export const doFetchGif = (searchTerm) => {
    const temp = `${baseUrl}&q=${searchTerm}`;
    return axios.get(temp)
        .then(resp => {
            return resp.data
        })
        .catch(error => error)
};

export function* fetchGifs(action) {
    try{

        const options = yield select(getGif);
        const isSearchTermChanged = !isEqual(options.prevSearchTerm, options.searchTerm);
        console.log(isSearchTermChanged)
        const resp = yield call(doFetchGif, action.searchTerm);
        yield put({ type: actions.FETCH_GIF_SUCCESS, payload: resp});
    }catch(error){
        yield put({ type: actions.FETCH_GIF_ERROR, payload: error});
    }

}

export default function* sagas(){
     yield fork(takeLatest, actions.FETCH_GIF, fetchGifs);
}