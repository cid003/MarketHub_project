import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, withRouter } from "react-router-dom";


import MenuBar from './MenuBar';
import TopHeader from './TopHeader';
import ProductGrid from './ProductGrid';
import BurgerMenu from './BurgerMenu';
import UserSettings from './UserSettings';
import ProductDescription from './ProductDescription';
import AddReviews from './AddReviews';

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }

    }

    render() {
        return (
                <div id="page-wrap">
                    <MenuBar />
                    <BurgerMenu />
                    <div className="w3-main" style={{marginLeft:250}}>
                    {/* this is where the primary page content will be placed  */}
                        {/*pushes down the content on a small screen*/}
                        <div className="w3-hide-large" style={{marginTop:'83px'}} />
                        <TopHeader />
                        <AddReviews />
                        {/*
                            <Switch>
                                <Route exact path="/" component={this.LandingPage} />
                                <Route exact path="/product" component={ProductDescription} />
                                <Route exact path="/Setting" component={UserSettings} />
                            </Switch>
                        <button onClick={this.props.toggleLogin}>
                            Login/Sign Up
                        </button>
                        */}
                    </div>
                </div>
            );
        }
}
