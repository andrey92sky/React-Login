import { takeLatest, put, delay, call} from 'redux-saga/effects';
import actions from './action';
import {login} from '../../lib/api';
import {push} from 'react-router-redux';
const loginConfirm=(data)=>(
{
        type:actions.LOGIN_REQUEST,
        payload:data
    }
)
function* loginRequest(action){
    console.log("DS");
    yield delay(1000);

    const result  = yield call(login, action);
    if(result.status)
    {
        yield put({
            type:actions.LOGIN_SUCCESS,
        })
        yield put(push('/'));
    }
    else
        yield put({
            type:actions.LOGIN_ERROR,
            error:result.error
        })
}
export default function * authSaga(){
    console.log("DS");
    yield takeLatest(actions.LOGIN_REQUEST, loginRequest);
}
export {loginConfirm};