import React from 'react';
import { render } from '@testing-library/react';

class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      class: props.currentCard.class,
    };
    console.log(props.currentCard);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const guess = event.target.dataset.class;
    if (guess === this.state.class) {
      console.log('correct');
    } else {
      console.log('wrong');
    }
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
