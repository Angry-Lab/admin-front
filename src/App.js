import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux';

import SignUp from './pages/SignUp';
import Login from './pages/Login';
import PasswordRecovery from './pages/PasswordRecovery';
import Dashboard from './pages/Dashboard';
import { isAuth } from "./constants/auth";
import { loginRequest } from "./thunks/auth";
import { getIsLogged } from "./actions";


const App = (props) => {
    const { isLogged } = props;

    return (
        isLogged ? <Login/> :
            <BrowserRouter>
                <Route exact path="/" component={Login}/>
                <Route exact path="/signup" component={SignUp}/>
                <Route exact path="/password-recovery" component={PasswordRecovery}/>
            </BrowserRouter>
    );
};

const stateToProps = state => ({
    isLogged: getIsLogged(state),
});

const dispatchToProps = dispatch => ({
    login: (email, password) => dispatch(loginRequest(email, password)),
});

export default connect(stateToProps, dispatchToProps)(App);
