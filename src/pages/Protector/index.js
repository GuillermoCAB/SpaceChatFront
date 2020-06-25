import React from 'react';
import { Route } from "react-router-dom";
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

function Protector({Component, path}) {

    const isSigned = useSelector(state => state.isSigned, [])
    
    return isSigned ? <Route path={path} component={Component} /> : <Redirect to={{pathname: '/'}} />;
}

export default Protector;