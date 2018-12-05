import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

class AuthenticationModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false
        };
    }

    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.handleClose}>
                <div className="w3-animate-zoom modalMinWidth" style={{padding:'32px'}}>
                <div className="w3-container w3-white w3-center modalMinWidth">
                <a onClick={this.props.handleClose} className="fa fa-remove w3-right w3-button w3-transparent w3-xxLarge">
                </a>
                <h3 className="w3-large modalMinWidth">Become a Customer or Vendor</h3>
                <p class="modalMinWidth">Login to your Account or Set up shop today!</p>
                    <p class="modalMinWidth">
                        <input className="w3-input w3-border modalMinWidth" type="text" placeholder="Enter email"></input>
                        <input className="w3-input w3-border modalMinWidth" type="text" placeholder="Enter password"></input>
                    </p>
                <button type="button" className="w3-button w3-padding-large w3-red w3-margin-bottom">
                    Authenticate Info
                </button>
                </div>
            </div>
            </Modal>
        );
    }
}

export default AuthenticationModal;

