import './App.css';
import io from 'socket.io-client';

const socket = io('http://localhost:9999');

function App() {
  return (
    <div className="App">
      Chat!
    </div>
  );
}

export default App;
