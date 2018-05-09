import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import './AddPlatformButton.css';

class AddPlatformButton extends Component {
    
    render() {
      return (
          <Nav
            bsStyle="tabs"
            justified
            activeKey={1}>
                <NavItem 
                    eventKey={1}>
                    Add Platform
                </NavItem>
          </Nav>
        );
    }
}
  
export default AddPlatformButton;