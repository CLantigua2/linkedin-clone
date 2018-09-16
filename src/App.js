import React, { Component } from 'react';
import Navbar from './Nav';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <header><h1>Hello World</h1></header>
      </div>
    );
  }
}

export default App;
