import React, { Component } from 'react';
import './style.css';
import Slider from './Slider';
import tuchkaImg from './img/tuchka.jpg';
import gavrikImg from './img/gavrik.jpg';
import Question from '../TextQuestion';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Cats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tuchkaVisible: false,
      gavrikVisible: false,
      tuchkaMinimized: false,
      gavrikMinimized: false
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({tuchkaVisible: true}), 1000);
    setTimeout(() => this.setState({tuchkaMinimized: true}), 6000);
    setTimeout(() => this.setState({gavrikVisible: true}), 7000);
    setTimeout(() => this.setState({gavrikMinimized: true}), 12000);
    setTimeout(() => this.setState({showSlider: true}), 14000);
  }

  render() {
    let tuchkaClass = 'cat tuchka';
    if (this.state.tuchkaVisible) {
      tuchkaClass += ' visible';
    }
    if (this.state.tuchkaMinimized) {
      tuchkaClass += ' minimized';
    }
    let gavrikClass = 'cat gavrik';
    if (this.state.gavrikVisible) {
      gavrikClass += ' visible';
    }
    if (this.state.gavrikMinimized) {
      gavrikClass += ' minimized';
    }
    if (!this.state.showSlider) {
      return (
        <div className="quiz-container">
          <div className="cats">
            <div className={tuchkaClass}>
              <img src={tuchkaImg} />
              <div className="cat-caption">Привет! Я агент Тучка</div>
            </div>
            <div className={gavrikClass}>
              <img src={gavrikImg} />
              <div className="cat-caption">А я - агент Гаврик</div>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="quiz-container">
          <div className="cats">
            <div className={tuchkaClass}>
              <img src={tuchkaImg} />
              <div className="cat-caption">Привет! Я агент Тучка</div>
            </div>
            <div className={gavrikClass}>
              <img src={gavrikImg} />
              <div className="cat-caption">А я - агент Гаврик</div>
            </div>
          </div>
          <Router>
            <div className="quiz">
              <Route path="/wassup" exact component={Slider} />
              <Route path="/wassup/go" render={(props) => (
                <Question question={"Начнем с простого. Сколько тебе исоплняется годиков?"}
                  answer="Ответ 1"
                  nextUrl="/wassup/yes" />
              )} />
            </div>
          </Router>
        </div>
      )
    }

  }
}

export default Cats;
