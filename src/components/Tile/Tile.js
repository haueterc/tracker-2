import React, { Component } from 'react';
import TwitterTile from './TwitterTile/TwitterTile';
// import RedditTile from './RedditTile/RedditTile';
// import GithubTile from './GithubTile/GithubTile';
// import YoutubeTile from './YoutubeTile/YoutubeTile';
// import MediumTile from './MediumTile/MediumTile';
// import SlackTile from './SlackTile/SlackTile';
// import FacebookTile from './FacebookTile/FacebookTile';
// import InstagramTile from './InstagramTile/InstagramTile';
// import PinterestTile from './PinterestTile/PinterestTile';
// import GoogleTile from './GoogleTile/GoogleTile';
// import VimeoTile from './VimeoTile/VimeoTile';
// import WhatsappTile from './WhatsappTile/WhatsappTile';
// import TwitchTile from './TwitchTile/TwitchTile';
// import TripAdvisorTile from './TripAdvisorTile/TripAdvisorTile';
// import YelpTile from './YelpTile/YelpTile';
// import VineTile from './VineTile/VinetTile';
// import SkypeTile from './SkypeTile/SkypeTile';
// import SpotifyTile from './SpotifyTile/SpotifyTile';
// import StackOverflowTile from './StackOverflowTile/StackOverflowTile';

import './Tile.css';

class Tile extends Component {
    tilePicker(platform) {
        console.log('Tile.tilePicker>', platform);
        if (platform === 'twitter') {
            return <TwitterTile/>;
        // } else if (platform === 'reddit') {
        //     return <RedditTile/>;
        // } else if (platform === 'github') {
        //     return <GithubTile/>;
        // } else if (platform === 'youtube') {
        //     return <YoutubeTile/>;
        // } else if (platform === 'instagram') {
        //     return <InstagramTile/>;
        // } else if (platform === 'skype') {
        //     return <SkypeTile/>;
        // } else if (platform === 'facebook') {
        //     return <FacebookTile/>;
        // } else if (platform === 'slack') {
        //     return <SlackTile/>;
        // } else if (platform === 'pinterest') {
        //     return <PinterestTile/>;
        // } else if (platform === 'whatsapp') {
        //     return <WhatsappTile/>;
        // } else if (platform === 'google') {
        //     return <GoogleTile/>;
        // } else if (platform === 'vimeo') {
        //     return <VimeoTile/>;
        // } else if (platform === 'trip advisor') {
        //     return <TwitterTile/>;
        // } else if (platform === 'twitch') {
        //     return <TwitchTile/>;
        // } else if (platform === 'yelp') {
        //     return <YelpTile/>;
        // } else if (platform === 'vine') {
        //     return <VineTile/>;
        // } else if (platform === 'spotify') {
        //     return <SpotifyTile/>;
        // } else if (platform === 'medium') {
        //     return <MediumTile/>;
        // } else if (platform === 'stack overflow') {
        //     return <StackOverflowTile/>;
        } else {
            return null;
        }
    }
    
    render() {
        let { platform } = this.props;
        return(
            <div>
                {this.tilePicker(platform)}
            </div>
        )
    }
}

export default Tile;