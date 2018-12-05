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
              <h2>Change Email</h2>
              <form>
                New Email:<br />
                <input type="text" name="Old Password" value="" />
                <br />
                Password:<br />
                <input type="text" name="New Password" value="" />
                <br />
                Repeat Password:<br />
                <input type="text" name="  Repeat Password" value="" />

                <br />
                <input type="submit" value="Submit" />
              </form>
              </div>
        );
    }
}
