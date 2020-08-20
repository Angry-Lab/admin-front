import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import PasswordRecovery from './pages/PasswordRecovery';
import Dashboard from './pages/Dashboard';
import isAuth from "./constants/auth";


const App = (props) => {
    return (
            <BrowserRouter>
                {
                    isAuth === true
                        ? (
                            <Route exact path="/" component={Dashboard} />
                        )
                        : (
                            <>
                                <Route exact path="/" component={Login} />
                                <Route exact path="/signup" component={SignUp} />
                                <Route exact path="/password-recovery" component={PasswordRecovery} />
                            </>
                        )
                }
            </BrowserRouter>
    );
}


export default App;
