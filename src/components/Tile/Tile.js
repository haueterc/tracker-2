import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from './../../ducks/reducer';
import { Well, Table } from 'react-bootstrap';
import './Tile.css';

class Tile extends React.Component {
    componentDidMount() {
        this.props.getUser();
    }
    render() {
        let { display_name, img ,auth_id } = this.props.user;
        return (
            <Well bsSize="large">
                <Table responsive>
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>ID</th>
                        <th>Pic</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>{display_name}</td>
                        <td>{auth_id}</td>
                        <td>IMG</td>
                        </tr>
                    </tbody>
                </Table>
            </Well>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, {getUser})(Tile);