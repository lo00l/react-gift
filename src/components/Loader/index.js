import React, { Component } from 'react';
import Loader from 'react-loader';
import { Redirect } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
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
          <Loader radius={80} lines={20} color="#3f51b5" width={16} />
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
