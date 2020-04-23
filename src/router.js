import React from 'react';
import {Route} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import AuthenticatedRoute from './components/AuthenticatedRoute';
const Router=()=>{
    return(
        <div>
            <AuthenticatedRoute isLoggedin={false} path='/' component={Home} />
            <Route path='/login' component={Login} />
        </div>
    )
}
export default Router;