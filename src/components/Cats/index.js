import React, { Component } from 'react';
import './style.css';
import Slider from './Slider';
import tuchkaImg from './img/tuchka.jpg';
import gavrikImg from './img/gavrik.jpg';
import TextQuestion from '../TextQuestion';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const questions = [
  {
    path: '/wassup/QRH',
    component: TextQuestion,
    props: {
      question: 'Начнем с простого. Сколько тебе исполняется годиков?',
      answer: '21',
      comment: 'Ух ты, ты знаешь свой возраст!'
    },
    nextUrl: '/wassup/GCI'
  },
  {
    path: '/wassup/GCI',
    component: TextQuestion,
    props: {
      question: 'Несколько "концертных" вопросов. На концерт какой группы вы с Лешей пошли вместе в первый раз?',
      answer: 'Нейромонах Феофанн',
      comment: 'А у тебя хорошая память! :)'
    },
    nextUrl: '/wassup/ROK'
  },
  {
    path: '/wassup/ROK',
    component: TextQuestion,
    props: {
      question: 'Ок, а сколько концертов всего вы посетили?',
      answer: '22',
      comment: 'Это был сложный вопрос, верно?'
    },
    nextUrl: '/wassup/APL'
  },
  {
    path: '/wassup/APL',
    component: TextQuestion,
    props: {
      question: 'А на какую группу вы ходили больше всего раз?',
      answer: 'Элизиум',
      comment: 'Именно! А дальше будут стихи!'
    },
    nextUrl: '/wassup/NFT'
  },
  {
    path: '/wassup/NFT',
    component: TextQuestion,
    props: {
      question: [
        'Об этом не расскажут по телеку,',
        'Об этом не споет Шнур,',
        'Но если Леша скажет "мяу",',
        'То Катя ответит...',
      ],
      answer: 'Мур',
      comment: 'Правильно!',
      placeholder: 'Что ответит Катя?'
    },
    nextUrl: '/wassup/RUM'
  },
  {
    path: '/wassup/RUM',
    component: TextQuestion,
    props: {
      question: 'Начнем с простого. Сколько тебе исоплняется годиков?',
      answer: '21',
      comment: 'Ок, свой возраст ты знаешь!'
    },
    nextUrl: '/wassup/KRA'
  },
  {
    path: '/wassup/KRA',
    component: TextQuestion,
    props: {
      question: 'Начнем с простого. Сколько тебе исоплняется годиков?',
      answer: '21',
      comment: 'Ок, свой возраст ты знаешь!'
    },
    nextUrl: '/wassup/VIM'
  },
  {
    path: '/wassup/VIM',
    component: TextQuestion,
    props: {
      question: 'Начнем с простого. Сколько тебе исоплняется годиков?',
      answer: '21',
      comment: 'Ок, свой возраст ты знаешь!'
    },
    nextUrl: '/wassup/LJF'
  },
  {
    path: '/wassup/LJF',
    component: TextQuestion,
    props: {
      question: 'Начнем с простого. Сколько тебе исоплняется годиков?',
      answer: '21',
      comment: 'Ок, свой возраст ты знаешь!'
    },
    nextUrl: '/wassup/BQP'
  },
  {
    path: '/wassup/BQP',
    component: TextQuestion,
    props: {
      question: 'Начнем с простого. Сколько тебе исоплняется годиков?',
      answer: '21',
      comment: 'Ок, свой возраст ты знаешь!'
    },
    nextUrl: ''
  },
]

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
                <TextQuestion question={"Начнем с простого. Сколько тебе исоплняется годиков?"}
                  answer="Ответ 1"
                  comment="Ок, свой возраст ты знаешь!"
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
