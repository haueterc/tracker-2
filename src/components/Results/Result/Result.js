import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createList, getTweet } from './../../../ducks/reducer';
import {  Well, Grid, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Icon from '../../Icon/Icon';
import './Result.css';


class Result extends React.Component {
    render() {
        let { platform, handle, profile_pic } = this.props;
        let activePlatform = platform;
        let activeHandle = handle;
        let activeProfilePic = profile_pic;
        let activeList = {activePlatform, activeHandle, activeProfilePic};
        let { fakeimg } = this.props;
        return (
            <Link to="/platforms">
                <Well
                    onClick={(e)=> {
                        this.props.createList(activeList)
                        this.props.getTweet(activeHandle)}}
                    bsSize="small">
                    <Grid>
                        <Row>
                            <Col className="nopadding" xs={2}>
                                <Icon value={ platform }/>    
                            </Col>
                            <Col className="nopadding" xs={2}>
                                <Image rounded
                                    href={profile_pic} 
                                    alt=""
                                    src={fakeimg} />     
                            </Col>
                            <Col xs={8}>
                                <p className="presize">{`@` + handle}</p>
                            </Col>
                        </Row>
                    </Grid>
                </Well>
            </Link>
        )
    }
}

function mapStateToProps(state) {
    return {
        activeList: state.activeList
    }
}

export default connect(mapStateToProps,{createList, getTweet})(Result);
