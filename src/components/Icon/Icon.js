import React, { Component } from 'react';
import {  FaTwitter
        , FaRedditSquare
        , FaGithubSquare
        , FaYoutubeSquare
        , FaMedium
        , FaSlack
        , FaFacebookSquare
        , FaInstagram
        , FaPinterest
        , FaGoogle
        , FaVimeo
        , FaWhatsapp
        , FaTwitch
        , FaTripadvisor
        , FaYelp
        , FaVine
        , FaSkype
        , FaSpotify
        , FaStackOverflow } from 'react-icons/lib/fa';
import './Icon.css';

class Icon extends Component {
    iconPicker(platform) {
        console.log('Icon.iconPicker>', platform);
        if (platform === 'twitter') {
            return <FaTwitter size={32}/>;
        } else if (platform === 'reddit') {
            return <FaRedditSquare size={32}/>;
        } else if (platform === 'github') {
            return <FaGithubSquare size={32}/>;
        } else if (platform === 'youtube') {
            return <FaYoutubeSquare size={32}/>;
        } else if (platform === 'instagram') {
            return <FaInstagram size={32}/>;
        } else if (platform === 'skype') {
            return <FaSkype size={32}/>;
        } else if (platform === 'facebook') {
            return <FaFacebookSquare size={32}/>;
        } else if (platform === 'slack') {
            return <FaSlack size={32}/>;
        } else if (platform === 'pinterest') {
            return <FaPinterest size={32}/>;
        } else if (platform === 'whatsapp') {
            return <FaWhatsapp size={32}/>;
        } else if (platform === 'google') {
            return <FaGoogle size={32}/>;
        } else if (platform === 'vimeo') {
            return <FaVimeo size={32}/>;
        } else if (platform === 'trip advisor') {
            return <FaTripadvisor size={32}/>;
        } else if (platform === 'twitch') {
            return <FaTwitch size={32}/>;
        } else if (platform === 'yelp') {
            return <FaYelp size={32}/>;
        } else if (platform === 'vine') {
            return <FaVine size={32}/>;
        } else if (platform === 'spotify') {
            return <FaSpotify size={32}/>;
        } else if (platform === 'medium') {
            return <FaMedium size={32}/>;
        } else if (platform === 'stack overflow') {
            return <FaStackOverflow size={32}/>;
        } else {
            return null;
        }
    }
    
    render() {
        let { value } = this.props;
        return(
            <div>
                {this.iconPicker(value)}
            </div>
        )
    }
}

export default Icon;