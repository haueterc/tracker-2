import React, { Component } from 'react';
import {  Well, Grid, Row, Col, Image } from 'react-bootstrap';
import {  FaTwitter
        , FaReddit
        , FaGithubSquare
        , FaYoutubeSquare
        , FaMedium
        , FaSlack
        , FaFacebookSquare
        , FaInstagram
        , FaPinterest
        , FaStackOverflow
        , FaGoogle
         } from 'react-icons/lib/fa';
import './Result.css';


class Result extends React.Component {
    iconPicker(platform, key) { 
        if (platform === 'twitter') {
            return <FaTwitter size={32}/>;
        } else if (platform === 'github') {
            return <FaReddit size={32}/>;
        } else if (platform === 'reddit') {
            return <FaGithubSquare size={32}/>;
        } else if (platform === 'youtube') {
            return <FaYoutubeSquare size={32}/>;
        } else if (platform === 'medium') {
            return <FaMedium size={32}/>;
        } else if (platform === 'slack') {
            return <FaSlack size={32}/>;
        } else if (platform === 'facebook') {
            return <FaFacebookSquare size={32}/>;
        } else if (platform === 'instagram') {
            return <FaInstagram size={32}/>;
        } else if (platform === 'pinterest') {
            return <FaPinterest size={32}/>;
        } else if (platform === 'stack overflow') {
            return <FaStackOverflow size={32}/>;
        } else if (platform === 'google') {
            return <FaGoogle size={32}/>;
        } else {
            return null;
        }
    }

    handleClick() {
        alert('click handled!')
    }

    render() {
        let { platform, profile_pic, handle } = this.props;
        let { fakeimg } = this.props;
        return (
            <Well 
                onClick={this.handleClick}
                bsSize="small">
                <Grid>
                    <Row>
                        <Col className="nopadding" xs={2}>
                            {this.iconPicker(platform)}    
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
        )
    }
}

export default Result;
