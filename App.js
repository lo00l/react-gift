import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Preloader from './components/Loader/';
import StartScreen from './components/StartScreen/';
import Cats from './components/Cats/';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={StartScreen} />
          <Route path="/get" component={Preloader} />
          <Route path="/wassup" component={Cats} />
          </div>
      </Router>
    );
  }

  showPreloader() {
    alert(this.n);
  }
}

export default App;
