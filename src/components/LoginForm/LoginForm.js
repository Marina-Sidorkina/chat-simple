import React, { useState } from 'react';
import './LoginForm.css';
import axios from 'axios';

const LoginForm = ({ onLogin }) => {
  const [ roomId, setRoomId ] = useState('');
  const [ userName, setUserName ] = useState('');

  const onSubmit = (evt) => {
    evt.preventDefault();

    axios.post('/rooms', {
      roomId,
      userName
    }).then(onLogin);
  }

  return (
    <form className="login-form"
          onSubmit={onSubmit}>
      <input className="login-form__input form-control form-control-lg"
             type="text"
             placeholder="Room ID"
             aria-label="Room ID"
             required
             value={roomId}
             onChange={(evt) => setRoomId(evt.target.value)}
      />
      <input className="login-form__input form-control form-control-lg"
             type="text"
             placeholder="Ваше имя"
             aria-label="Ваше имя"
             required
             value={userName}
             onChange={(evt) => setUserName(evt.target.value)}
      />
      <button className="login-form__btn btn btn-success"
              type="submit">Войти</button>
    </form>
  );
}

export default LoginForm;
