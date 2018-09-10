import React, { Component } from 'react';
import './style.css';

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
    return (
      <div>
        <div className={tuchkaClass}>
          <img src="tuchka.jpg" />
          <div className="cat-caption">Привет! Я агент Тучка</div>
        </div>
          <div className={gavrikClass}>
            <img src="gavrik.jpg" />
            <div className="cat-caption">А я - агент Гаврик</div>
          </div>
      </div>
    )
  }
}

export default Cats;
