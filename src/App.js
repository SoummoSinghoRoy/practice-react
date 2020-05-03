import React, { Component } from 'react';
import Books from './Components/Books';
import Data from './Components/Data';

class App extends Component {
  render() {
    return (
      <div>
        <Books />
        <Data />
      </div>
    )
  }
}

export default App
