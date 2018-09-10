import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import './style.css';

class StartScreen extends Component {
  constructor(props) {
    super(props);
    this.callback = props.callback;
  }

  render() {
    return (
      <div>
      <Link to="/get" className="get-gift">
        <Button variant="contained" color="primary" size="large" onClick={this.callback}>
          Получить подарок
        </Button>
      </Link>
      </div>
    )
  }
}

export default StartScreen;
