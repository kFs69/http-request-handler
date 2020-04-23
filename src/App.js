import React from 'react';
import './App.css';
import { api } from './function/httpHandler';

const App = () => {
  const post = () => {
    // POST REQUEST
  }

  const get = () => {
    // GET REQUEST
    api.get('/api/BTC/ticker').then(res => console.log(res));
  }

  return (
    <div className="App">
      <button onClick={get}>GET</button>
      <button onClick={post}>POST</button>
    </div>
  );
}

export default App;
