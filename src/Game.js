import React from 'react';
import { Data } from './Data';
import Buttons from './Buttons';

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      index: 14,
      score: 0,
    };
  }

  render() {
    const thisIndex = this.state.index;
    return (
      <div className='game-container'>
        <div className='card-container'>
          <div className='symbol-card'>{Data[thisIndex].symbol}</div>
          <div>
            <Buttons currentCard={Data[thisIndex]} />
          </div>
        </div>
        <div className='game-data'>score etc</div>
      </div>
    );
  }
}

export default Game;
