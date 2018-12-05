import React, {Component} from 'react';
import LinkButton from './LinkButton';
import { withRouter, Link } from 'react-router-dom';


export default class MenuBar extends Component {
    constructor(props) {
        super (props)

        this.state = {
            message: ''
        }
        this.goHome = this.goHome.bind(this);
    }
    login = () => {
        console.log('wow');
    }

    logout = () => {
        console.log('bye');
    }
    // button works now
    goHome = () => {
        this.setState(state => ({
            message: 'go home'
        }),() => {
            console.log(this.state.message);
        });
    }

    render() {
        return (
            <nav className="w3-sidebar w3-bar-block w3-white w3-collapse w3-top" style={{zIndex:3, width:250}} id="mySidebar">
                <div className="w3-container w3-display-container w3-padding-16">
                    <h3 className="w3-wide"><b>MarketHub</b></h3>
                </div>
                <div className="w3-padding-64 w3-large w3-text-grey" style={{fontWeight:'bold'}}>
                    <Link to="/product" className="w3-bar-item w3-button">Pants</Link>
                    <a onClick={this.goHome} className="w3-bar-item w3-button">Shirts</a>
                    <a onClick={this.goHome} className="w3-bar-item w3-button">Shoes</a>
                    <a onClick={this.goHome} className="w3-bar-item w3-button">Jewelry</a>
                    <a onClick={this.goHome} className="w3-bar-item w3-button">Furniture</a>
                    <a onClick={this.goHome} className="w3-bar-item w3-button">Sign In</a>
                </div>
            </nav>
        )
    }

}
