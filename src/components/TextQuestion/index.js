import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import './style.css';

class TextQuestion extends Component {
  constructor(props) {
    super(props);
    this.nextUrl = props.nextUrl;
    if (Array.isArray(props.question)) {
      this.question = props.question.map((questionPart, index) => (
        <p key={index}>{questionPart}</p>
      ));
    } else {
      this.question = props.question;
    }
    this.comment = props.comment;
    this.answer = props.answer;
    this.placeholder = props.placeholder || 'Ответ';
    this.checkCallback = this.checkAnswer.bind(this);
    this.inputChangeCallback = this.inputChange.bind(this);
    this.wrongSnackbarCloseCallback = this.wrongSnackbarClose.bind(this);
    this.state = {
      solved: false,
      showWrongSnackbar: false,
      showRightSnackbar: false
    };
  }

  render() {
    if (this.state.solved) {
      return (
        <Redirect to={this.nextUrl} />
      )
    } else {
      return (
        <div className="question-wrapper">
          <Paper className="question">
            <div>{this.question}</div>
            <div className="answer">
              <TextField
                label={this.placeholder}
                type="text"
                onChange={this.inputChangeCallback}
                fullWidth />
              <Button className="check"
              variant="contained"
              size="large"
              color="primary"
              onClick={this.checkCallback}>Бульк</Button>
            </div>
          </Paper>
          <Snackbar
            open={this.state.showWrongSnackbar}
            onClose={this.wrongSnackbarCloseCallback}
            message={<span>{this.getWrongText()}</span>}
          />
          <Snackbar
            open={this.state.showRightSnackbar}
            message={<span>{this.comment}</span>}
          />
        </div>
      )
    }
  }

  checkAnswer() {
    if (this.inputValue == this.answer) {
      this.setState({showRightSnackbar: true});
      setTimeout(() => {this.setState({solved: true})}, 3000);
    } else {
      this.setState({showWrongSnackbar: true});
    }
  }

  inputChange(event) {
      this.inputValue = event.target.value;
  }

  wrongSnackbarClose() {
    this.setState({showWrongSnackbar: false});
  }

  getWrongText() {
    return 'Подумой еще!';
  }
}

export default TextQuestion;
