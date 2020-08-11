import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import PasswordRecovery from './pages/PasswordRecovery';
import Dashboard from './pages/Dashboard';


const App = (props) => {
    return (
            <BrowserRouter>
                    <Route exact path="/">
                        {false ? <Redirect to="/dashboard" /> :
                                          <Redirect to="/login" />}
                    </Route>
                    <Route path='/login' component={Login}/>
                    <Route path='/sign-up' component={SignUp}/>
                    <Route path='/password-recovery' component={PasswordRecovery}/>
                    <Route path='/dashboard' component={Dashboard}/>
            </BrowserRouter>
    );
}


export default App;
