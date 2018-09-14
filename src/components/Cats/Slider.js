import React, { Component } from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

const settings = {
  duration: 1000,
  infinite: false,
  autoplay: 5000,
  touchDisabled: true,
  previousButton: null,
  nextButton: null
}

const colors = [
  'red',
  'green',
  'orange'
]

class MySlider extends Component {
  constructor(props) {
    super(props);
    this.url = props.url;
    this.content = [
      'Мы перехватили твой подарок и спрятали его в надежном месте, о котором знаем только мы.',
      'Если ты хочешь получить свой подарок, тебе придется пройти квест, ответив на несколько вопросов.',
      <div>Нажми Мяу, если ты согласна на наши условия!<br /><Link to={this.url}><Button className="meow" variant="contained" color="primary" size="large">Мяу</Button></Link></div>
    ];
  }

  render() {
    return (
      <Slider {...settings}>
        {this.content.map((item, index) => <div key={index} className="slide-item">
        <Paper className={"paper " + colors[index % colors.length]}>{item}</Paper>
        </div>)}
      </Slider>
    )
  }
}

export default MySlider;
