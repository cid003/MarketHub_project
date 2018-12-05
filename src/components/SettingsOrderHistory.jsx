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
              <h2>Your Orders</h2>
                <p>11/18/18 - Order#: 2750</p>
                <p>09/28/18 - Order#: 2649</p>
                <p>05/12/18 - Order#: 2301</p>
                <p>12/08/17 - Order#: 2014</p>
                <p>09/01/17 - Order#: 1984</p>
                <p>View All...</p>
              </div>
        );
    }
}
