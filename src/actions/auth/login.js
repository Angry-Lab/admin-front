import isAuth from "../../constants/auth";
import React from "react";
import { Alert } from '@material-ui/lab';
import Collapse from "@material-ui/core/Collapse";
import { Redirect } from "react-router-dom";
import {loginServerURL} from "../../constants/serverURLs";
import WrongEmailOrPasswordMessage from "../../components/auth/WrongEmailOrPasswordMessage";
import ServerErrorMessage from "../../components/auth/ServerErrorMessage";


//TODO: API от димы и там ясно будет че как сделать

//Когда ты нажимаешь кнопку ВОЙТИ, логин и пароль идут на сервер.
//Приходит ответ.
export const requestIsLogin = (email, password) => {
    const data = JSON.stringify({
        "login": email,
        "password": password
    });

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhr.open("POST", "http://localhost:6363/auth");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "ee5a16b9-9257-4f97-93e1-fbed63efac33");

    xhr.send(data);
}


//Смотрим на ответ и классифицируем его.
//Вызываем соответсвующую решению функцию.
const responseExamination = (response) => {
    const responseJson = response.json();
}


//Это если авторизация успешна.
const goodLogin = () => {
    console.log('good login')

    isAuth = true;
    return (<Redirect to='/dashboard'/>);
}


//Это если авторизация не успешна.
const badLogin = () => {
    console.log('bad login')
    //TODO: error message UI: 'Неправильный email или пароль'

    return (
        <WrongEmailOrPasswordMessage />
    );
}


//Это если авторизация не успешна и дебил это мы.
const serverError = () => {
    console.log('server error')
    //TODO: error message UI: 'Непредвиденная ошибка. Попробуйте перезагрузить страницу.'

    return (
        <ServerErrorMessage />
    );
}
