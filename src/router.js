import React from 'react';
import {Route} from 'react-router-dom';
import Home from './components/Home';
import LoginContainer from './container/LoginContainer';
import AuthenticatedRoute from './components/AuthenticatedRoute';
const Router=()=>{
    return(
        <div>
            <AuthenticatedRoute isLoggedin={false} path='/' component={Home} />
            <Route path='/login' component={LoginContainer} />
        </div>
    )
}
export default Router;