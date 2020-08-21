//Это логика работы страницы Авторизации.
//Чтобы отредактировать ее содержание, иди в /components/LoginForm.js
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';

import LoginForm from "../../components/auth/LoginForm";
import { requestIsLogin } from '../../actions/auth/login'
import { loginRequest } from "../../thunks/auth";


class Login extends Component {
    constructor(props) {
        console.log(props);

        super(props);
        this.state = {
            email: '',
            password: '',
        };

        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this)
    }

    onChange(e) {
        //Когда что-то меняется в полях ввода (email и password),
        //вызывается Это, и значение пишется в state.
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitForm(e) {
        //Когда ты нажимаешь на кнопку ВОЙТИ, email и password отправляются на сервер.
        //Молодец - редирект в Dashboard.
        e.preventDefault();
        const { email, password } = this.state;

        // requestIsLogin(email, password);

        this.props.login(email, password)
    }

    render() {
        return (
            <div>
                <LoginForm
                    email={this.state.email}
                    password={this.state.password}
                    onChange={this.onChange}
                    submitForm={this.submitForm}
                />
            </div>
        );
    }
}

const stateToProps = state => {
    console.log(state);
    return state
};

const dispatchToProps = dispatch => ({
    login: (email, password) => dispatch(loginRequest(email, password)),
});

export default connect(stateToProps, dispatchToProps)(Login);
