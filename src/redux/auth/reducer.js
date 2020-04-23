import actions from './action'

const initState = {
    isLogin:false,
    error:''
}

export default function authReducer(state = initState, action)
{
    switch(action.type)
    {   
        case actions.LOGIN_SUCCESS:
            return {
                ...state,
                isLogin:true
            };
        case actions.LOGIN_ERRO:
            return {
                ...state,
                isLogin:false,
                error:action.error
            };
        default:
            return state;
            

    }
}
