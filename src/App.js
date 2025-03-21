import React from 'react';
import CountdownTimer from './components/CountdownTimer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Our Wedding Website</h1>
        <p>We are excited to celebrate our special day with you!</p>
        <CountdownTimer />
      </header>
    </div>
  );
}

export default App;