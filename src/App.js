import React, { Component } from 'react';
import './App.css';
import FormFavoriteMovie from './components/FormFavoriteMovie'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>My favorite movie</h1>
        </header>
        <FormFavoriteMovie />
      </div>
    );
  }
}

export default App;
