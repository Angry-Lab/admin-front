//Это логика работы страницы Регистрации.
//Чтобы отредактировать ее содержание, иди в /components/SignUpForm.js

import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import SignUpForm from "../components/SignUpForm";


export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            secondName: '',
            email: '',
            password: '',
            auth: false,
        }

        this.onChange = this.onChange.bind(this)
        this.submitForm = this.submitForm.bind(this)

    }

    onChange(e){
        //Когда что-то меняется в полях ввода (firstName, secondName, email, password),
        //вызывается Это, и значение пишется в state.
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitForm(e){
        //Когда ты нажимаешь на кнопку ЗАРЕГИСТРИРОВАТЬСЯ,
        //firstName, secondName, email, password отправляются на сервер.
        //Молодец - редирект в Dashboard.
        e.preventDefault()
        const { firstName, secondName, email, password } = this.state

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const preRaw = {"firstName": this.state.firstName,
                        "secondName": this.state.secondName,
                        "email": this.state.email,
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

        //Отладка
        console.log(preRaw)

        //TODO: Почему не работает Redirect?
        return (<Redirect to="/login" />);

    }

    render() {
        return (
            <div>
                <SignUpForm firstName={this.state.firstName}
                            secondName={this.state.secondName}
                            email={this.state.email}
                            password={this.state.password}
                            onChange={this.onChange}
                            submitForm={this.submitForm}
                />
            </div>
        );
    }
}