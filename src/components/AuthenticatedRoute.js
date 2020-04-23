import React from 'react';
import {Route, Redirect } from 'react-router-dom';
const AuthenticatedRoute =({component:Component, isLoggedin}) =>(
    <Route
        render={props=>
            isLoggedin?( <Component {...props} />)
            :(
                <Redirect to='/login' />
            )
        }
    />
)

export default AuthenticatedRoute;