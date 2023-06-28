import React, { Component } from 'react';

class ColorChangingBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'black',
    };
  }

  getRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
  }

  handleMouseEnter() {
    const randomColor = this.getRandomColor();
    this.setState({ color: randomColor });
  }

  handleMouseLeave() {
    this.setState({ color: 'black' });
  }

  handleClick() {
    clearTimeout(this.colorChangeTimeout);
    this.colorChangeTimeout = setTimeout(() => {
      this.setState({ color: 'black' });
    }, 500);
  }

  render() {
    const { color } = this.state;

    return (
      <div
        style={{
          width: '255px',
          height: '255px',
          backgroundColor: color,
        }}
        onMouseEnter={() => this.handleMouseEnter()}
        onMouseLeave={() => this.handleMouseLeave()}
        onClick={() => this.handleClick()}
      ></div>
    );
  }
}

export default ColorChangingBox;
