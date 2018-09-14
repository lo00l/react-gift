import React, { Component } from 'react';
import Loader from 'react-loader';
import { Redirect } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './style.css';
import errorImage from './img/error.png';

class Preloader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ticked: false,
      showError: false
    };
  }

  componentDidMount() {
    setTimeout(() => {this.setState({showError: true})}, 5000);
    setTimeout(() => {this.setState({ticked: true})}, 9000);
  }

  render() {
    if (!this.state.ticked) {
      if (this.state.showError) {
        return (
          <div className="load-error">
            <img src={errorImage} />
            <div>Ошибка загрузки подарка</div>
          </div>
        )
      } else {
        return (
          <div className="loader">
            <Loader radius={80} lines={20} color="#3f51b5" width={16} />
            <div className="caption">Подарок загружается</div>
          </div>
        )
      }
    }
    return (
      <Redirect to="/wassup" />
    );
  }
}

export default Preloader;
