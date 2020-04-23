import {combineReducers} from 'redux';
import {all} from 'redux-saga/effects';
import authSaga from './auth/saga';
import auth from './auth/reducer';

const rootReducer =combineReducers({
    auth
});

export function* rootSaga(){
    console.log("root saga");
    yield all([authSaga()]);
}

export default rootReducer;