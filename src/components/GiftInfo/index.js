import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './style.css';

class GiftInfo extends Component {
  render() {
    return (
      <div>
        <Paper className="gift-info">
        <Typography variant="headline" component="h3">
          Умница!
        </Typography>
        <Typography component="p">
          Ты справилась со всеми нашими заданиями! Как и обещали, сообщаем, куда мы спрятали подарок.
        </Typography>
        <Typography component="p">
          Свой подарок ты найдешь в шкафу, в коробке слева сверху.
        </Typography>
        <Typography component="p">
          Кстати, нам пришлось повозиться, чтобы засунуть его туда, мы же коты! :D
        </Typography>
        </Paper>
      </div>
    )
  }
}

export default GiftInfo;
