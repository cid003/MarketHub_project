import React, {Component} from 'react';
import { slide as Menu } from 'react-burger-menu';

export default class BurgerMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
        this.goHome = this.goHome.bind(this);
    }

    goHome = () => {
        this.setState(state => ({
            message: 'go home'
        }),() => {
            console.log(this.state.message);
        });
    }

    render() {
        return (
            <div id="outer-container" className="w3-hide-large">
                    <header className="w3-bar w3-top w3-hide-large w3-black w3-xlarge">
                    <div className="w3-bar-item w3-padding-24 w3-wide">MarketHub</div>
                </header>
                <Menu right styles={styles} pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
                    <a onClick={this.goHome} className="w3-bar-item w3-button">Sign Up</a>
                    <a onClick={this.goHome} className="w3-bar-item w3-button">Sign In</a>
                    <a onClick={this.goHome} className="w3-bar-item w3-button">Clothes</a>
                    <a onClick={this.goHome} className="w3-bar-item w3-button">Accessories</a>
                </Menu>
            </div>
            
        );
    }
}

var styles = {
    bmBurgerButton: {
        position: 'fixed',
        width: '36px',
        height: '30px',
        right: '36px',
        top: '36px',
      },
      bmBurgerBars: {
        background: '#FFF'
      },
      bmCrossButton: {
        height: '24px',
        width: '24px'
      },
      bmCross: {
        background: '#bdc3c7'
      },
      bmMenu: {
        background: '#373a47',
        padding: '2.5em 1.5em 0',
        fontSize: '1.51em'
      },
      bmMenuWrap: {
          width: 200
      },
      bmMorphShape: {
        fill: '#373a47'
      },
      bmItemList: {
        color: '#b8b7ad',
        padding: '0.8em'
      },
      bmItem: {
        display: 'inline-block'
      },
      bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)'
      }
}