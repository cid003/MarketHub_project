import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';
import UncontrolledCarousel from './UncontrolledCarousel'
import ControlledCarousel from './ControlledCarousel'

export default class LandingPage extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
          <div>
            <UncontrolledCarousel />
            <br />
            <br />
            <ControlledCarousel />
          </div>
        );
    }
}
