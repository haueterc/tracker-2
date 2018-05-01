import React from 'react';
import { connect } from 'react-redux'
import { getUser } from './../../ducks/reducer';
import NavBar from '../NavBar/NavBar';
import Search from '../Search/Search';
import Tile from '../Tile/Tile';


class Private extends React.Component {
    componentDidMount() {
        this.props.getUser();
    }

    bankBalance() {
        return '$' + Math.floor((Math.random() + 1) * 1000) + '.00';
    }

    render() {
        let { display_name, auth_id } = this.props.user;
        console.log(this.props)
        return (
            <div id="main_div">
                <NavBar></NavBar>
                <Search/>
                <Tile />
                <h3>Community Bank</h3>
                <hr/>
                <h4>Account Info:</h4>

                 {
                     display_name ?
                     (
                         <div>
                             <p>Account Holder: {display_name}</p>
                             <p>Account Number: {auth_id}</p>
                             <p>Account Balance: {this.bankBalance()}</p>
                             <a href="http://localhost:3005/logout">
                                <button>Logout</button>
                             </a>
                         </div>
                     ) :
                    <p>
                        <a href={ process.env.REACT_APP_LOGIN }>
                            <button>Login</button>
                        </a>
                    </p>
                 }

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