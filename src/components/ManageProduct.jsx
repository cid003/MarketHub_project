import React, {Component} from 'react';
import {Grid} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import EditProductBar from './EditProductBar';

export default class ManageProduct extends Component {
    constructor(props) {
        super(props)

        this.state = {
          description: '',
          price: '',

        }
    }

    render() {
        return (
          <div>
          <h2>Manage Products</h2>
          <hr className="hrBar" />
          <EditProductBar />
          <EditProductBar />
          <EditProductBar />
          </div>
        );
    }
}
