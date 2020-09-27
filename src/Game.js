import React from 'react';
import { Data } from './Data';
import Buttons from './Buttons';
import Controls from './Controls';

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      index: 0,
      score: 0,
      selectedChars: this.setUpData(Data, []),
      gameOver: false,
    };
    this.nextCard = this.nextCard.bind(this);
    this.endGame = this.endGame.bind(this);
    this.reStart = this.reStart.bind(this);
  }

  excludeClass(value, classes) {
    if (classes.includes(value.class)) {
      return;
    } else {
      return value;
    }
  }

  setUpData(array, classes) {
    const newArray = this.shuffleArray(array);
    const filteredArray = newArray.filter((char) =>
      this.excludeClass(char, classes)
    );
    return filteredArray;
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
    if (this.state.index >= this.state.selectedChars.length - 1) {
      this.endGame(result);
    } else {
      this.updateGame(result);
    }
  }

  endGame(result) {
    if (result) {
      this.setState((prevState) => {
        return { index: prevState.index + 1, score: prevState.score + 1 };
      });
    }
    this.setState({ gameOver: true });
  }

  reStart(classes) {
    this.setState({
      index: 0,
      score: 0,
      selectedChars: this.setUpData(Data, classes),
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
    const cardList = this.state.selectedChars;

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

        <Controls
          score={this.state.score}
          gameState={this.state.gameOver}
          total={this.state.selectedChars.length - 1}
          reStart={this.reStart}
        />
      </div>
    );
  }
}

export default Game;
