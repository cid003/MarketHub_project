import React, {Component} from 'react';

import {Grid} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';


export default class Reviews extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div class="main-us-container">
            <Grid>
            <h1>Order#: 2750</h1>
              <Row className="show-grid">
                <Col sm={6} m={3}>
                  <h3>Jeans and Beans</h3>
                  <p>Return Address:</p>
                  <p>1234 Warehouse Street</p>
                  <p>Unit 5</p>
                  <p>San Marcos, CA, 92084</p>
                </Col>
                </Row>
                <hr />
                <Row>
                <Col sm={6} m={3}>
                <p>Bill To:</p>
                <p>Jane Doe</p>
                <p>5678 City Drive</p>
                <p>Escondido, CA, 92025</p>
                </Col>
                <Col sm={6} m={3}>
                <p>Ship To:</p>
                <p>Jane Doe</p>
                <p>5678 City Drive</p>
                <p>Escondido, CA, 92025</p>
                </Col>
              </Row>
              <hr />
              <Row className="show-grid">
                <Col sm={2} m={1}>
                  <p>Quantity</p>
                </Col>
                <Col sm={4} m={2}>
                <p>Item</p>
                </Col>
                <Col sm={4} m={2}>
                <p>Price</p>
                </Col>
              </Row>
              <hr />
              <Row className="show-grid">
              <Col sm={2} m={1}>
                <p>1</p>
                <p>3</p>
              </Col>
              <Col sm={6} m={3}>
              <p>Banana Yellow Jeans - 30"x30"</p>
              <p>Arizona Tea - 24 Pack</p>
              </Col>
              <Col sm={4} m={2}>
              <p>$99.99</p>
              <p>$24.00</p>
              </Col>
              </Row>
              <hr />
              <Row className="show-grid">
              <Col sm={6} m={3}>
              </Col>
              <Col sm={2} m={2}>
              <p>Tax:</p>
              <p>Shipping:</p>
              <p>Total:</p>
              </Col>
              <Col sm={4} m={2}>
              <p>$3.25</p>
              <p>$10.45</p>
              <p>$137.69</p>
              </Col>
              </Row>
            </Grid>
            </div>
        );
    }
}
