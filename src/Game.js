import React from 'react';
import { Data } from './Data';

class Game extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    console.log(Data);
    return (
      <div className='game-container'>
        <div className='card-container'>{Data[0].symbol}</div>
        <div className='game-data'>score etc</div>
      </div>
    );
  }
}

export default Game;
