import React from 'react';
import Login from '../components/Login';
import {loginConfirm} from '../redux/auth/saga';
import {connect} from 'react-redux';
const LoginContainer = ({isLoggin, error, loginConfirm})=>{
    return(
        <Login
            isLoggin={isLoggin}
            error={error}
            loginConfirm={loginConfirm}
        ></Login>
    )
}

export default connect(
    state=>({
        isLoggin:state.auth.isLoggin,
        error:state.auth.error
    }),
    {
        loginConfirm
    }
    
)(LoginContainer);