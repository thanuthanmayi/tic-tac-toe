// index.js

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Create a new component for the registration form
function RegistrationForm({ onStartGame }) {
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');

  const handleStartGame = () => {
    // Validate player names (you can add more validation if needed)
    if (player1 && player2) {
      onStartGame(player1, player2);
    } else {
      alert('Please enter names for both players.');
    }
  };

  return (
    <div>
      <h2>Enter Player Names</h2>
      <label htmlFor="player1">Player 1 Name:</label>
      <input
        type="text"
        id="player1"
        name="player1"
        value={player1}
        onChange={(e) => setPlayer1(e.target.value)}
        required
      />
      <br />
      <label htmlFor="player2">Player 2 Name:</label>
      <input
        type="text"
        id="player2"
        name="player2"
        value={player2}
        onChange={(e) => setPlayer2(e.target.value)}
        required
      />
      <br />
      <button type="button" onClick={handleStartGame}>
        Play
      </button>
    </div>
  );
}

// Modify the root component to include the registration form
ReactDOM.render(
  <React.StrictMode>
    <RegistrationForm
      onStartGame={(player1, player2) => {
        // Render the App component with player names
        ReactDOM.render(
          <React.StrictMode>
            <App player1={player1} player2={player2} />
          </React.StrictMode>,
          document.getElementById('root')
        );
      }}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
