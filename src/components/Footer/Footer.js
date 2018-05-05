import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Well, Grid, Row, Col } from 'react-bootstrap';
import Login from './Login/Login';
import Logout from './Logout/Logout';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <Well className="fixed-bottom" bsSize="small">
                <Grid>
                    <Row>
                        <Col xs={6}>
                            <Login/>
                        </Col>
                        <Col xs={6}>
                            <Logout/>
                        </Col>
                    </Row>
                </Grid>
            </Well>
        )
    }
}

export default Footer;