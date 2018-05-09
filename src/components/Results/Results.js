import './Results.css';
import React from 'react';
import { connect } from 'react-redux';
import Result from './Result/Result';


class Results extends React.Component {
    render() {
        let { handles } = this.props;
        let { picture } = this.props.user;
        return (
            <div >
                { handles[0] ? (
                handles.map( handle => (
                    <Result 
                    platform={ handle.social_media_platform } 
                    key={ handle.id }
                    fakeimg={ picture }
                    profile_pic={ handle.picture }
                    handle={ handle.handle }/>
                ))) : null }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        handles: state.handles,
        user: state.user
    }
}

export default connect(mapStateToProps)(Results);













