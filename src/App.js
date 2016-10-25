import React, { Component } from 'react';
import Flyout from './components/flyout';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="wrapper-header">
          <i class="custom-swoosh g72-swoosh fs28-sm"></i>
        </div>

        <div id="wrapper-nav">

        </div>

        <div id="wrapper-content">
          
          <p class="ncss-base">Hello Nike!</p>
          <Flyout />
        </div>

        <div id="wrapper-footer">

        </div>
      </div>
    );
  }
}

export default App;
