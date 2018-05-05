import './Private.css';
import React from 'react';
import { connect } from 'react-redux';
import { getUser } from './../../ducks/reducer';
import NavBar from '../NavBar/NavBar';
import Search from '../Search/Search';
import Results from '../Results/Results';
import Tile from '../Tile/Tile';
import Footer from '../Footer/Footer';


class Private extends React.Component {
    componentDidMount() {
        this.props.getUser();
    }

    render() {
        let { display_name, auth_id, img } = this.props.user;
        let { handles } = this.props;
        return (
            <div id="main_div">
                <NavBar/>
                <Search/>
                <Results
                    fakeimg={ img }/>
                <Footer/>
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

export default connect(mapStateToProps, {getUser})(Private);