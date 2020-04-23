import {all, takelatest, put, delay, call} from 'redux-saga/effects';
import actions from './action';
import login from '../../lib/api';

const loginConfirm=(data)=>(
    {
        action:actions.loginRequest,
        payload:data
    }
)
function* loginRequest(action){
    yield delay(1000);

    const result  = yield call(login, action);
    if(result.status)
        yield put({
            type:actions.LOGIN_SUCCESS,
        })
    else
        yield put({
            type:actions.LOGIN_ERROR,
            error:result.error
        })
}
export function * authSaga(){
    yield takelatest(actions.LOGIN_REQUEST, loginRequest);
}
export {loginConfirm};