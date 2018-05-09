import './Platforms.css';
import React from 'react';
import { connect } from 'react-redux';
import NavBar from '../NavBar/NavBar';
import SelectedResult from '../SelectedResult/SelectedResult';
import Tile from '../Tile/Tile';
import Results from '../Results/Results';
import AddPlatformFooter from '../AddPlatformFooter/AddPlatformFooter';
import NoResult from '../Results/NoResult/NoResult';


class Platforms extends React.Component {
    render() {
        let { toggle } = this.props;
        return (
            <div>
                <NavBar/>
                <SelectedResult/>
                <Tile/>
                { toggle ? <NoResult/> : null }
                <AddPlatformFooter/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        toggle: state.toggle
    }
}

export default connect(mapStateToProps)(Platforms);