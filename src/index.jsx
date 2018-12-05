import React, {Component} from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';


//Component
import Home from './components/Home';
import AuthenticationModal from './components/Authentication';

class App extends Component {
    constructor() {
        super();

        this.state = {
            openloginModal: false
        }
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }


    handleShow = () => {
        this.setState({openloginModal: true}, () => {
            console.log(this.state.openloginModal);
        });
    }

    handleClose = () => {
        this.setState({openloginModal: false}, () => {
            console.log(this.state.openloginModal);
        });
    }

    render() {
        return (
            <Router>
                <div>
                    <AuthenticationModal show={this.state.openloginModal} handleClose={this.handleClose} />
                    <Home toggleLogin={this.handleShow} />
                </div>
            </Router>
        );
    }
}

ReactDom.render(
    <App />,
    document.getElementById('app')
);
