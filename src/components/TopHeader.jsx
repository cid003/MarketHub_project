import React, {Component} from 'react';

export default class TopHeader extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <header className="w3-container w3-xlarge">
                <p className="w3-left">MarketHub</p>
                <p className="w3-right">
                    <i className="fa fa-shopping-cart w3-margin-right" />
                    <i className="fa fa-search" />
                </p>
            </header>
        );
    }
}