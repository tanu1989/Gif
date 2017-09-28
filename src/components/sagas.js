import {fork} from 'redux-saga/effects';
import gif from './GIFHome/sagas';

if(module.hot){
    module.hot.accept();
}


export default function* root() {
    yield fork(gif);
}