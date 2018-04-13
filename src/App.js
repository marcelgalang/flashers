import React, { Component } from 'react';
import './App.css';
import FlashcardsIndex from './components/flashcardsIndex';
import CategoriesIndex from './components/CategoriesIndex';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">Flashers</h1>
        </header>
        <CategoriesIndex />
      </div>
    );
  }
}

export default App;
