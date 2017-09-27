import {fork, put, call, takeLatest} from 'redux-saga/effects';
import * as actions from './actions';


if(module.hot){
    module.hot.accept();
}
const apiKey = 'XvVhi3HWMSrdcZ6RqLMC3twsKJ69RggN';

const baseUrl = `http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&`;

export const doFetchGif = (searchTerm) => {
  return new Promise(resolve => {
      console.log(searchTerm);
      return resolve.data;
  })
};

export function* fetchGifs (action) {
    try{
        const resp = yield call(doFetchGif, action.searchTerm);
        yield put({ type: actions.FETCH_GIF_SUCCESS, payload: resp});
    }catch(error){
        yield put({ type: actions.FETCH_GIF_ERROR, payload: error});
    }

}

export default function *rootSagas() {
    yield fork(takeLatest, actions.FETCH_GIF, fetchGifs);
}