import React from 'react';
import {Route} from 'react-router-dom';
import Home from './components/Home';
import LoginContainer from './container/LoginContainer';
import AuthenticatedRoute from './components/AuthenticatedRoute';
import {connect} from 'react-redux';
const Router=({isLoggedin})=>{
    return(
        <div>
            <AuthenticatedRoute isLoggedin={isLoggedin} path='/' component={Home} />
            <Route path='/login' component={LoginContainer} />
        </div>
    )
}
export default connect(state=>({
    isLoggedin:state.auth.isLoggedin
})) (Router);