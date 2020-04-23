import {combineReducers} from 'redux';
import {all} from 'redux-saga/effects';
import authSaga from './auth/saga';
import authReducer from './auth/reducer';

const rootReducer =combineReducers({
    authReducer
});

export function* rootSaga(){
    yield all([authSaga]);
}

export default rootReducer;