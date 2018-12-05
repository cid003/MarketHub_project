import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';

export default class UncontrolledCarousel extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null
    };
  }

  handleSelect(selectedIndex, e) {
    alert(`selected=${selectedIndex}, direction=${e.direction}`);
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
      <h1>Super Winter Savings!</h1>
      </div>
      <div>
      <Carousel className="">
        <Carousel.Item className="lp-image">
          <a href="">
          <img alt="Shoe" src={'https://i.imgur.com/h2dz9dZ.jpg'} />
          </a>
            <div className="main-lp-container">
              <h3>Converse <del>$59.99</del> $25.99!</h3>
              </div>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    <Carousel.Item className="lp-image">
      <a href="">
      <img alt="Jewelry" src={'https://i.imgur.com/SfUtvRx.jpg'} />
      </a>
        <div className="main-lp-container">
          <h3>Jewelry <del>$199.99</del> $9.99!!!</h3>
        </div>
      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className="lp-image">
      <a href="">
      <img alt="Chair" src={'https://i.imgur.com/vPI5OzZ.jpg'} />
      </a>
        <div className="main-lp-container">
          <h3>Chair <del>$89.99</del> $88.99!</h3>
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
