import './Results.css';
import React from 'react';
import { connect } from 'react-redux';
import Result from './Result/Result';


class Results extends React.Component {
    render() {
        let { handles } = this.props;
        let { fakeimg } = this.props;
        return (
            <div >
                { handles[0] ? (
                    handles.map( handle => (
                        <Result 
                        platform={ handle.social_media_platform } 
                        key={ handle.id }
                        fakeimg={ fakeimg }
                        profile_pic={ handle.img }
                        handle={ handle.handle }/>
                    ))) : null }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        handles: state.handles,
    }
}

export default connect(mapStateToProps)(Results);














