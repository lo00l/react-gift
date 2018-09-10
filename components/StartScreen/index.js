import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

class StartScreen extends Component {
  constructor(props) {
    super(props);
    this.callback = props.callback;
  }

  render() {
    return (
      <div>
      <Link to="/get">
        <Button variant="outlined" color="primary" onClick={this.callback}>
          Получить подарок
        </Button>
      </Link>
      </div>
    )
  }
}

export default StartScreen;
