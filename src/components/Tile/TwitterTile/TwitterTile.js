import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  Well, Grid, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Icon from '../../Icon/Icon';
import './TwitterTile.css';


class TwitterTile extends React.Component {
    render() {
        let { tweet} = this.props;
        return (
            <Well
                bsSize="small">
                <Grid>
                    <Row>
                        <Col className="nopadding" xs={4}>
                            <p className="presize">Tweet</p>
                        </Col>  
                        <Col className="nopadding" xs={4}>
                            <p className="presize">Tweet</p>
                        </Col>   
                        <Col xs={4}>
                            <p className="presize">Tweet</p>
                        </Col>
                    </Row>
                </Grid>
            </Well>
        )
    }
}

function mapStateToProps(state) {
    return {
        tweet: state.tweet
    }
}

export default connect(mapStateToProps)(TwitterTile);
