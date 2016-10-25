import React, { Component } from 'react';
import SizePicker from './components/sizePicker';
import Dropdown from './components/dropdown';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        </div>

        <SizePicker />
        <Dropdown />
      </div>
    );
  }
}

export default App;
