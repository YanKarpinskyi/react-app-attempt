import React from 'react';
import './App.css';
import MyFirstComponent from './components/MyFirstComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Yan</h1>
        <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"} className="App-logo" alt="logo" />
        <a href='https://react.dev/'>React doc</a>
      </header>
      <MyFirstComponent />
    </div>
  );
}

export default App;