import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getUser } from './../../ducks/reducer';
import { Navbar, Nav, NavDropdown, NavItem, MenuItem, Image } from 'react-bootstrap';
import './NavBar.css';

class NavBar extends Component {

    componentDidMount() {
        this.props.getUser();
    }

    render() {
        let { display_name, img, auth_id } = this.props.user;
        return (
        <Navbar inverse collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
            <a href="#">Tracker</a>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav>
            <NavDropdown eventKey={1} title="Range" id="basic-nav-dropdown">
                <MenuItem eventKey={1.1}>Today</MenuItem>
                <MenuItem eventKey={1.2}>Last 7 Days</MenuItem>
                <MenuItem eventKey={1.3}>Last 30 Days</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={1.3}>Date Range</MenuItem>
            </NavDropdown>
            </Nav>
            <Nav>
            <NavDropdown eventKey={2} title="Sort" id="basic-nav-dropdown">
                <MenuItem eventKey={2.1}>Most Active</MenuItem>
                <MenuItem eventKey={2.2}>Most Recent</MenuItem>
            </NavDropdown>
            </Nav>
            <Nav pullRight>
            <NavItem eventKey={1} href="#">
                { display_name }
            </NavItem>
            <NavItem eventKey={2} href="#">
                Link Right
            </NavItem>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
        )
    }
}
function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, {getUser})(NavBar);





