//Это логика работы страницы Восстановления паролей.
//Чтобы отредактировать ее содержание, иди в /components/PasswordRecoveryForm.js

import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import PasswordRecoveryForm from "../../components/auth/PasswordRecoveryForm";


export default class PasswordRecovery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
        }

        this.onChange = this.onChange.bind(this)
        this.submitForm = this.submitForm.bind(this)

    }

    onChange(e){
        //Когда что-то меняется в поле ввода (email),
        //вызывается Это, и значение пишется в state.
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitForm(e){
        //Когда ты нажимаешь на кнопку ДАЛЕЕ, email отправляется на сервер.
        e.preventDefault()
        const { email } = this.state

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const preRaw = {"email": this.state.email};
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

        //Просто отладка
        console.log(preRaw);

        //TODO: Почему не работает Redirect?
        return (<Redirect to="/login" />);
    }

    render() {
        return (
            <div>
                <PasswordRecoveryForm email={this.state.email}
                                      onChange={this.onChange}
                                      submitForm={this.submitForm}
                />
            </div>
        );
    }
}