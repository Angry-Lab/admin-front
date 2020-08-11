//Это логика работы страницы Авторизации.
//Чтобы отредактировать ее содержание, иди в /components/LoginForm.js

import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import LoginForm from "../components/LoginForm";


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            auth: false,
        }

        this.onChange = this.onChange.bind(this)
        this.submitForm = this.submitForm.bind(this)

    }

    onChange(e){
        //Когда что-то меняется в полях ввода (email и password),
        //вызывается Это, и значение пишется в state.
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitForm(e){
        //Когда ты нажимаешь на кнопку ВОЙТИ, email и password отправляются на сервер.
        //Молодец - редирект в Dashboard.
        e.preventDefault()
        const { email, password } = this.state

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const preRaw = {"email": this.state.email,
                        "password":this.state.password};
        const raw = JSON.stringify(preRaw);

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://staging.vemeet.app/api/auth/register/email", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

        if(email === 'admin' && password === 'admin'){
            this.state.auth = true;

            //Отладка
            console.log('// --- Success!')
            console.log('Object:')
            console.log(this.state)
            console.log('String:')
            console.log(raw)

            //TODO: Почему не работает Redirect?
            return (<Redirect to="/dashboard" />);
        }
        else{
            console.log('Wrong Email: ' + this.state.email + ' /Password: ' + this.state.password + ' ! Correct is admin/admin')
        }
    }

    render() {
        return (
            <div>
                <LoginForm email={this.state.email}
                           password={this.state.password}
                           onChange={this.onChange}
                           submitForm={this.submitForm}
                           />
            </div>
        );
    }
}