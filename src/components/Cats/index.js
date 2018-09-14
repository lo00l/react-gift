import React, { Component } from 'react';
import './style.css';
import Slider from './Slider';
import tuchkaImg from './img/tuchka.jpg';
import gavrikImg from './img/gavrik.jpg';
import TextQuestion from '../TextQuestion';
import GiftInfo from '../GiftInfo';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const questions = [
  {
    path: '/wassup/QRH',
    component: TextQuestion,
    props: {
      question: 'Начнем с простого. Сколько тебе исполняется годиков?',
      answer: '21',
      comment: 'Ух ты, ты знаешь свой возраст!',
      nextUrl: '/wassup/YVD'
    },
  },
  {
    path: '/wassup/YVD',
    component: TextQuestion,
    props: {
      question: 'Немного посложнее. В каком месяце вы познакомились с Лешей?',
      answer: 'Декабрь',
      comment: 'Да! Далее - "концертные" вопросы!',
      nextUrl: '/wassup/GCI'
    },
  },
  {
    path: '/wassup/GCI',
    component: TextQuestion,
    props: {
      question: 'На концерт какой группы вы с Лешей пошли вместе в первый раз?',
      answer: 'Нейромонах Феофан',
      comment: 'А у тебя хорошая память! :)',
      nextUrl: '/wassup/ROK'
    },
  },
  {
    path: '/wassup/ROK',
    component: TextQuestion,
    props: {
      question: 'Ок, а сколько концертов всего вы посетили?',
      answer: '22',
      comment: 'Это был сложный вопрос, верно?',
      nextUrl: '/wassup/APL'
    },
  },
  {
    path: '/wassup/APL',
    component: TextQuestion,
    props: {
      question: 'А на какую группу вы ходили больше всего раз?',
      answer: 'Элизиум',
      comment: 'Именно! А теперь немного поэзии!',
      nextUrl: '/wassup/NFT'
    },
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
      comment: 'Мур! Да, с рифмой ты однозначно дружишь!',
      placeholder: 'Что ответит Катя?',
      nextUrl: '/wassup/RUM'
    },
  },
  {
    path: '/wassup/RUM',
    component: TextQuestion,
    props: {
      question: [
        'Иногда жизнь бывает странной,',
        'И мы сейчас сделаем вброс:',
        'Отыщи подсказку под ванной,',
        'Чтобы ответить на этот вопрос.'
      ],
      answer: 'Испания',
      comment: 'Ты справилась, умница! Осталось совсем немного!',
      nextUrl: '/wassup/KRA'
    },
  },
  {
    path: '/wassup/KRA',
    component: TextQuestion,
    props: {
      question: 'Пару вопросов по HTML. С помощью какого тега создается колонка таблицы?',
      answer: 'td',
      comment: 'Верно!',
      nextUrl: '/wassup/VIM'
    },
  },
  {
    path: '/wassup/VIM',
    component: TextQuestion,
    props: {
      question: 'Какое CSS свойство задает размер шрифта?',
      answer: 'font-size',
      comment: 'Правильно!',
      nextUrl: '/wassup/APL'
    },
  },
  {
    path: '/wassup/APL',
    component: TextQuestion,
    props: {
      question: 'И последний вопрос: ты любишь Лешу? :)',
      answer: 'Да',
      comment: 'Ура!',
      nextUrl: '/wassup/LJF'
    },
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
              <Route path="/wassup" exact render={(props) => (
                <Slider url={questions[0].path} />
              )} />
              {questions.map((question, index) => (
                <Route exact path={question.path} render={(props) => (
                  <TextQuestion {...question.props} />
                )} />
              ))}
              <Route path="/wassup/LJF" component={GiftInfo} />
            </div>
          </Router>
        </div>
      )
    }

  }
}

export default Cats;
