import React from 'react';
import logo from './logo.svg';
import './App.css';
import Score from "./components/Score"
import Game from './components/Game';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import { Route,Routes } from 'react-router-dom';
import Result from './components/Result';
import Rules from "./components/Rules";
import { useState } from 'react';
function App() {
  const [show, setShow] = useState<boolean>(false);
  const handleRules = () => {
    setShow(!show);
  };
  return (
    <div className="App">
      <Provider store={store}>
      <Score/>
      <Routes>
          <Route path='/' element={<Game/>}/>
          <Route path='/result' element={<Result/>}/>
      </Routes>
      <div className="button">
        <button onClick={handleRules}>RULES</button>
      </div>
      <Rules show={show} onHide={handleRules} />

      </Provider>
    </div>
  );
}

export default App;
