import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CamperLeaderboard from './CamperLeaderboard';

class App extends Component {
  render() {
    return (
      <div className="App">
          <CamperLeaderboard />
      </div>
    );
  }
}

export default App;
