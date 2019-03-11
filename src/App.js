import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BasePage } from './BasePage';
import { Home } from './Home/index';

class App extends Component {
  render() {
    return (
      <Home />
    );
  }
}

export default App;
