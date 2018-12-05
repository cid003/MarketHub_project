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
              <h2>Your Coupons</h2>
                <p>eZ50ir - 50% Off Polos</p>
                <p>c55Gjo - Free Shipping</p>
                <p>gGwPm9 - 2% Off Nike</p>
                <p>r3Kt99 - 99% Off Cargo Shorts</p>
              </div>
        );
    }
}
