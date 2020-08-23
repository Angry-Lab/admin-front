import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux';

import Registration from './pages/auth/Registration';
import Login from './pages/auth/Login';
import PasswordRecovery from './pages/auth/PasswordRecovery';
import Dashboard from './pages/dashboard/Dashboard';
// import { loginRequest } from "./thunks";
// import { getIsLogged } from "./actions/getIsLogged";


const App = (props) => {
    //const { isLogged } = props;
//isLogged === false ? :
// login не действителен
    return (

            <BrowserRouter>
                <Route exact path="/dashboard" component={Dashboard}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/signup" component={Registration}/>
                <Route exact path="/password-recovery" component={PasswordRecovery}/>
            </BrowserRouter>
    );
};

// const stateToProps = state => ({
//     isLogged: getIsLogged(state),
// });

// const dispatchToProps = dispatch => ({
//     login: (email, password) => dispatch(loginRequest(email, password)),
// });

export default (App);

//connect(stateToProps, dispatchToProps)
//это до апп
