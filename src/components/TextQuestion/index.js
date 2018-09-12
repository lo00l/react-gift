import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';

class TextQuestion extends Component {
  constructor(props) {
    super(props);
    this.nextUrl = props.nextUrl;
    this.question = props.question;
    this.answer = props.answer;
    this.checkCallback = this.checkAnswer.bind(this);
    this.inputChangeCallback = this.inputChange.bind(this);
    this.snackbarCloseCallback = this.snackbarClose.bind(this);
    this.state = {
      solved: false,
      showSnackbar: false
    };
  }

  render() {
    if (this.state.solved) {
      return (
        <Redirect to={this.nextUrl} />
      )
    } else {
      return (
        <div>
          <Paper className="question">
            <div>{this.question}</div>
            <div className="answer">
              <TextField label="Ответ" type="text"
                onChange={this.inputChangeCallback}
                fullWidth />
              <Button className="check"
              variant="contained"
              size="large"
              color="primary"
              onClick={this.checkCallback}>Мурк</Button>
            </div>
          </Paper>
          <Snackbar
            open={this.state.showSnackbar}
            onClose={this.snackbarCloseCallback}
            message={<span>{this.getWrongText()}</span>}
          />
        </div>
      )
    }
  }

  checkAnswer() {
    if (this.inputValue == this.answer) {
      this.setState({solved: true});
    } else {
      this.setState({showSnackbar: true});
    }
  }

  inputChange(event) {
      this.inputValue = event.target.value;
  }

  snackbarClose() {
    this.setState({showSnackbar: false});
  }

  getWrongText() {
    return 'Подумай еще!';
  }
}

export default TextQuestion;
