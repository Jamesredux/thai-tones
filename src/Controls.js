import React from 'react';

class Controls extends React.Component {
  constructor() {
    super();
    this.state = {
      excludeHigh: false,
      excludeMiddle: false,
      excludeLow: false,
    };
    this.restart = this.restart.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  restart() {
    this.props.reStart();
  }

  handleChange(event) {
    const { name, type, checked } = event.target;
    this.setState({ [name]: checked });
  }

  handleSubmit(e) {
    e.preventDefault();

    const classes = [
      this.state.excludeHigh ? 'high' : null,
      this.state.excludeMiddle ? 'middle' : null,
      this.state.excludeLow ? 'low' : null,
    ];
    console.log(classes.includes(null));
    if (!classes.includes(null)) {
      alert('You must select at least one class!');
    } else {
      this.props.reStart(classes);
    }
  }
  render() {
    return (
      <div className='game-data'>
        <div>
          <p>Test your knowledge of Thai Consonant Classes</p>
          <p>Select which classes to include</p>
        </div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              name='excludeHigh'
              checked={this.state.excludeHigh}
              type='checkbox'
              onChange={this.handleChange}
            />
            Remove High Class
          </label>
          <label>
            <input
              name='excludeMiddle'
              checked={this.state.excludeMiddle}
              type='checkbox'
              onChange={this.handleChange}
            />
            Remove Middle Class
          </label>
          <label>
            <input
              name='excludeLow'
              checked={this.state.excludeLow}
              type='checkbox'
              onChange={this.handleChange}
            />
            Remove Low Class
          </label>
          <button>Start Quiz</button>
        </form>
        <div className='score'>
          <p>
            Score: {this.props.score} / {this.props.total + 1}
          </p>
        </div>
      </div>
    );
  }
}

export default Controls;
