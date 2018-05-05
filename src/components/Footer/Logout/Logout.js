import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import './Logout.css'

class Logout extends Component {
    
    render() {
      return (
          <Nav
            bsStyle="tabs"
            justified
            activeKey={1}>
                <NavItem eventKey={1} href={process.env.REACT_APP_LOGOUT}>
                    Logout
                </NavItem>
          </Nav>
        )
    }
}
  
export default Logout;