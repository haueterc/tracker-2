import './Private.css';
import React from 'react';
import { connect } from 'react-redux';
import { getUser } from './../../ducks/reducer';
import NavBar from '../NavBar/NavBar';
import Search from '../Search/Search';
import Results from '../Results/Results';
import Footer from '../Footer/Footer';


class Private extends React.Component {
    componentDidMount() {
        this.props.getUser();
    }

    render() {
        return (
            <div id="main_div">
                <NavBar/>
                <Search/>
                <Results/>
                <Footer/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, {getUser})(Private);