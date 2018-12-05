import React, {Component} from 'react';
import SettingsAccount from './SettingsAccount';
import SettingsCoupons from './SettingsCoupons';
import SettingsChangePass from './SettingsChangePass';
import SettingsChangeEmail from './SettingsChangeEmail';
import SettingsOrderHistory from './SettingsOrderHistory';
import SettingsReviewHistory from './SettingsReviewHistory';
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
              <Row className="show-grid">
                <Col sm={6} m={3}>
                  <SettingsAccount />
                </Col>
                <Col sm={6} m={3}>
                  <SettingsCoupons />
                </Col>
              </Row>
              <Row className="show-grid">
                <Col sm={6} m={3}>
                  <SettingsOrderHistory />
                </Col>
                <Col sm={6} m={3}>
                  <SettingsReviewHistory />
                </Col>
              </Row>
              <Row className="show-grid">
                <Col sm={6} m={3}>
                  <SettingsChangePass />
                </Col>
                <Col sm={6} m={3}>
                  <SettingsChangeEmail />
                </Col>
              </Row>
            </Grid>
            </div>
        );
    }
}
