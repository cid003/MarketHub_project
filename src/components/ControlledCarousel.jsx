import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';

export default class ControlledCarousel extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      index: 0,
      direction: null,
      interval: false,
      slide: false,
      pause: true
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
      <div>
      <div className="main-lp-container">
      <h1>Newest Arrivals!</h1>
      </div>
      <div>
      <Carousel className="" activeIndex={index} direction={direction} onSelect={this.handleSelect}>
        <Carousel.Item className="lp-image">
          <a href="">
          <img alt="Shorts" src={'https://i.imgur.com/TbPLRvZ.jpg'} />
          </a>
            <div className="main-lp-container">
              <h3>Shorts $55.99!</h3>
              </div>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    <Carousel.Item className="lp-image">
      <a href="">
      <img alt="Camo Pants" src={'https://i.imgur.com/MR8MVtG.jpg'} />
      </a>
        <div className="main-lp-container">
          <h3>Camo Pants $29.99!!!</h3>
        </div>
      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className="lp-image">
      <a href="">
      <img alt="Track Pants" src={'https://i.imgur.com/sm0tq0k.jpg'} />
      </a>
        <div className="main-lp-container">
          <h3>Track Pants $15.99!</h3>
        </div>
      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
  </div>
    );
  }
}
