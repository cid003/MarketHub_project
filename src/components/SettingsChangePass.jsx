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
              <h2>Change Password</h2>
              <form>
                Old Password:<br />
                <input type="text" name="Old Password" value="" />
                <br />
                New Password:<br />
                <input type="text" name="New Password" value="" />
                <br />
                Repeat New Password:<br />
                <input type="text" name="  Repeat Password" value="" />
                <br />
                <input type="submit" value="Submit" />
              </form>
              </div>
        );
    }
}
