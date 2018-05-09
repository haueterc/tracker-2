import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setPlatform, updateToggle } from '../../../ducks/reducer';
import {  Well, Grid, Row, Col, Image, Panel } from 'react-bootstrap';
import Icon from '../../Icon/Icon';
import {  FaTwitter
        , FaRedditSquare
        , FaGithubSquare
        , FaYoutubeSquare
        , FaInstagram
        , FaSkype
        , FaFacebookSquare
        , FaSlack
        , FaPinterest
        , FaWhatsapp
        , FaGoogle
        , FaVimeo
        , FaTripadvisor
        , FaTwitch
        , FaYelp
        , FaVine
        , FaSpotify
        , FaMedium } from 'react-icons/lib/fa';
import './NoResult.css';


class NoResult extends React.Component {

    handleClick(platform) {
        console.log('NoResult.handleClick>', platform);
        this.props.setPlatform(platform);
        this.props.updateToggle();
    }

    render() {

        return (
            <Well bsSize="small">
                <Grid>
                    <Row>
                        <Col xs={2}>
                            <span
                                onClick={(e)=> this.handleClick('twitter')}>
                                <FaTwitter size={32}/>      
                            </span>
                        </Col>
                        <Col xs={2}>
                            <span
                                onClick={(e)=> this.handleClick('reddit')}>
                                <FaRedditSquare size={32}/>      
                            </span>
                        </Col>
                        <Col xs={2}>
                            <span
                                onClick={(e)=> this.handleClick('github')}>
                                <FaGithubSquare size={32}/>      
                            </span>
                        </Col>
                        <Col xs={2}>
                            <span
                                onClick={(e)=> this.handleClick('youtube')}>
                                <FaYoutubeSquare size={32}/>      
                            </span>
                        </Col>
                        <Col xs={2}>
                            <span
                                onClick={(e)=> this.handleClick('instagram')}>
                                <FaInstagram size={32}/>      
                            </span>
                        </Col>
                        <Col xs={2}>
                            <span
                                onClick={(e)=> this.handleClick('skype')}>
                                <FaSkype size={32}/>      
                            </span>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={2}>
                            <span
                                onClick={(e)=> this.handleClick('facebook')}>
                                <FaFacebookSquare size={32}/>      
                            </span>
                        </Col>
                        <Col xs={2}>
                            <span
                                onClick={(e)=> this.handleClick('slack')}>
                                <FaSlack size={32}/>      
                            </span>
                        </Col>
                        <Col xs={2}>
                            <span
                                onClick={(e)=> this.handleClick('pinterest')}>
                                <FaPinterest size={32}/>      
                            </span>
                        </Col>
                        <Col xs={2}>
                            <span
                                onClick={(e)=> this.handleClick('whatsapp')}>
                                <FaWhatsapp size={32}/>      
                            </span>
                        </Col>
                        <Col xs={2}>
                            <span
                                onClick={(e)=> this.handleClick('google')}>
                                <FaGoogle size={32}/>      
                            </span>
                        </Col>
                        <Col xs={2}>
                            <span
                                onClick={(e)=> this.handleClick('vimeo')}>
                                <FaVimeo size={32}/>      
                            </span>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={2}>
                            <span
                                onClick={(e)=> this.handleClick('trip advisor')}>
                                <FaTripadvisor size={32}/>      
                            </span>
                        </Col>
                        <Col xs={2}>
                            <span
                                onClick={(e)=> this.handleClick('twitch')}>
                                <FaTwitch size={32}/>      
                            </span>
                        </Col>
                        <Col xs={2}>
                            <span
                                onClick={(e)=> this.handleClick('yelp')}>
                                <FaYelp size={32}/>      
                            </span>
                        </Col>
                        <Col xs={2}>
                            <span
                                onClick={(e)=> this.handleClick('vine')}>
                                <FaVine size={32}/>      
                            </span>
                        </Col>
                        <Col xs={2}>
                            <span
                                onClick={(e)=> this.handleClick('spotify')}>
                                <FaSpotify size={32}/>      
                            </span>
                        </Col>
                        <Col xs={2}>
                            <span
                                onClick={(e)=> this.handleClick('medium')}>
                                <FaMedium size={32}/>      
                            </span>
                        </Col>
                    </Row>
                </Grid>
            </Well>    
        )
    }
}

function mapStateToProps(state) {
    return {
        platform: state.platform,
        toggle: state.toggle
    }
}

export default connect(mapStateToProps, {setPlatform, updateToggle})(NoResult);