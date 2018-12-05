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
              <h2>Your Account</h2>
                <p>User: DuploMan</p>
                <p>Name: Rob Robertson</p>
                <p>Email: thisIsntSpam@gmail.com</p>
              </div>
        );
    }
}
