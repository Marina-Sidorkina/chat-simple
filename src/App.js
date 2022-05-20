import './App.css';
import io from 'socket.io-client';

function App() {
  const connectSocket = () => {
    io('http://localhost:9999');
  }

  return (
    <div className="App">
     <form className="form">
       <input className="form-control form-control-lg" type="text" placeholder="Room ID"
              aria-label="Room ID" />
       <input className="form-control form-control-lg" type="text" placeholder="Ваше имя"
              aria-label="Ваше имя" />
       <button className="form__btn btn btn-success" type="submit">Войти</button>
     </form>
    </div>
  );
}

export default App;
