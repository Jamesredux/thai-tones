import React from 'react';
import { render } from '@testing-library/react';

class Buttons extends React.Component {
  constructor(props) {
    super(props);

    console.log(props.currentCard);
    this.handleClick = this.handleClick.bind(this);
  }

  // propbably don't need to create state above
  // just use props.currendCard.class throughout
  handleClick(event) {
    console.log(this.props.currentCard.class);
    let result = false;
    const guess = event.target.dataset.class;
    if (guess === this.props.currentCard.class) {
      console.log('correct');
      result = true;
    } else {
      console.log('wrong');
    }
    this.props.handleGuess(result);
  }

  render() {
    return (
      <div className='buttons'>
        <div className='button' data-class='low' onClick={this.handleClick}>
          Low
        </div>
        <div className='button' data-class='middle' onClick={this.handleClick}>
          Middle
        </div>
        <div className='button' data-class='high' onClick={this.handleClick}>
          High
        </div>
      </div>
    );
  }
}

export default Buttons;
