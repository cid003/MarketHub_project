import React, {Component} from 'react';

export default class Reviews extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
              <div class="settings-container">
              <h2>Your Reviews</h2>
                <p>11/20/18 - XLarge Pizza Cutter</p>
                <p>10/02/18 - Red Aviators</p>
                <p>05/15/18 - Big Blue Ocean Towel</p>
                <p>12/12/17 - Mystery Christmas Box</p>
                <p>09/04/17 - Fake Pumpkin</p>
                <p>View All...</p>
              </div>
        );
    }
}
