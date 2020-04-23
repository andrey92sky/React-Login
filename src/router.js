import React from 'react';
import {Route} from 'react-router-dom';
import Home from './components/Home';
import AuthenticatedRoute from './components/AuthenticatedRoute';
const Router=()=>{
    return(
        <div>
            <AuthenticatedRoute path='/' component={Home} />
        </div>
    )
}