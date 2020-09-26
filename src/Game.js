import React from 'react';
import { Data } from './Data';
import Buttons from './Buttons';

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      index: 0,
      score: 0,
      total: Data.length - 1,
      gameOver: false,
      shuffleData: this.shuffleArray(Data),
    };
    this.nextCard = this.nextCard.bind(this);
    this.endGame = this.endGame.bind(this);
    this.reStart = this.reStart.bind(this);
  }

  shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));

      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  nextCard(result) {
    console.log(this.state.index);
    console.log('total');
    console.log(this.state.total);
    if (this.state.index >= this.state.total) {
      this.endGame();
    } else {
      this.updateGame(result);
    }
  }

  endGame() {
    this.setState({ gameOver: true });
    console.log('GAME OVER');
  }

  reStart() {
    this.setState({
      index: 0,
      score: 0,
      total: this.state.shuffleData.length - 1,
      gameOver: false,
    });
  }

  updateGame(result) {
    if (result) {
      this.setState((prevState) => {
        return { index: prevState.index + 1, score: prevState.score + 1 };
      });
    } else {
      this.setState((prevState) => {
        return { index: prevState.index + 1 };
      });
    }
  }

  render() {
    const thisIndex = this.state.index;
    const cardList = this.state.shuffleData;
    console.log(cardList);
    let display;
    if (this.state.gameOver !== true) {
      display = (
        <div className='card-container'>
          <div className='symbol-card'>{cardList[thisIndex].symbol}</div>
          <div>
            <Buttons
              currentCard={cardList[thisIndex]}
              handleGuess={this.nextCard}
            />
          </div>
        </div>
      );
    } else {
      display = (
        <div className='card-container'>
          <div className='results'>
            <h1>Test Completed</h1>
          </div>
        </div>
      );
    }

    return (
      <div className='game-container'>
        {display}
        <div className='game-data'>
          <div>
            <p>
              Score: {this.state.score} / {this.state.total + 1}
            </p>
          </div>
          {this.state.gameOver ? (
            <div className='restart' onClick={this.reStart}>
              Restart?
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Game;
