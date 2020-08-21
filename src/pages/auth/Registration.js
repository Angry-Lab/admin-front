//Это логика работы страницы Регистрации.
//Чтобы отредактировать ее содержание, иди в /components/SignUpForm.js

import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import RegistrationForm from "../../components/auth/RegistrationForm";
import {registrationRequest} from "../../thunks";
import {connect} from "react-redux";


export class Registration extends Component {
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

        this.props.registration(firstName, secondName, email, password)
    }

    render() {
        return (
            <div>
                <RegistrationForm firstName={this.state.firstName}
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


const stateToProps = state => {
    console.log(state);
    return state
};

const dispatchToProps = dispatch => ({
    registration: (firstName, secondName, email, password) => dispatch(registrationRequest(firstName, secondName, email, password)),
});

export default connect(stateToProps, dispatchToProps)(Registration);