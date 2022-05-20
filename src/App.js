import './App.css';
import LoginForm from './components/LoginForm';
import io from 'socket.io-client';

function App() {
  const connectSocket = () => {
    io('http://localhost:9999');
  }

  return (
    <div className="App">
      <LoginForm />
    </div>
  );
}

export default App;
