import React, { Component } from 'react';
import Loader from 'react-loader';
import { Redirect } from "react-router-dom";
import './style.css';

class Preloader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ticked: false
    };
  }

  componentDidMount() {
    setTimeout(() => {this.setState({ticked: true})}, 5000);
  }

  render() {
    if (!this.state.ticked) {
      return (
        <div className="loader">
          <Loader radius={80} lines={20} color="#c6fff5" width={16} />
          <div className="caption">Подарок загружается</div>
        </div>
      )
    }
    return (
      <Redirect to="/wassup" />
    );
  }
}

export default Preloader;
