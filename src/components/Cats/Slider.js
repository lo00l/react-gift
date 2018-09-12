import React, { Component } from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

const settings = {
  duration: 1000,
  infinite: false,
  autoplay: 3000,
  touchDisabled: true,
  previousButton: null,
  nextButton: null
}

const colors = [
  'red',
  'green',
  'orange'
]

const content = [
  'Мы перехватили твой подарок и спрятали его в надежном месте, о котором знаем только мы. Но не спеши расстраиваться!',
  'Ты же хочешь получить свой подарок? Мы тебе отдадим его, если ты выполнишь все наши задания и ответишь на все вопросы!',
  <div>Нажми Мяу, если ты согласна на наши условия!<br /><Link to="/wassup/go"><Button className="meow" variant="contained" color="primary" size="large">Мяу</Button></Link></div>
];

class MySlider extends Component {
  render() {
    return (
      <Slider {...settings}>
        {content.map((item, index) => <div key={index} className="slide-item">
        <Paper className={"paper " + colors[index % colors.length]}>{item}</Paper>
        </div>)}
      </Slider>
    )
  }
}

export default MySlider;
