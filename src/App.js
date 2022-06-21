import './App.css';
import LoginForm from './components/LoginForm';
import { useReducer } from "react";
import reducer from "./reducer";

function App() {
  const [ state, dispatch ] = useReducer(reducer, {
    isAuth: false
  });

  const onLogin = () => {
    dispatch({
      type: 'IS_AUTH',
      payload: true
    });
  }

  return (
    <div className="App">
      <LoginForm onLogin={onLogin}/>
    </div>
  );
}

export default App;
