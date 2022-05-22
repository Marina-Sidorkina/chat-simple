import React from 'react';
import './LoginForm.css';
import socket from '../../socket';

const LoginForm = () => {
  return (
    <form className="login-form">
      <input className="login-form__input form-control form-control-lg" type="text" placeholder="Room ID"
             aria-label="Room ID" />
      <input className="login-form__input form-control form-control-lg" type="text" placeholder="Ваше имя"
             aria-label="Ваше имя" />
      <button className="login-form__btn btn btn-success" type="submit">Войти</button>
    </form>
  );
}

export default LoginForm;
