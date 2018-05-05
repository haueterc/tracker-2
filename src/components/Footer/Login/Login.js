import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import './Login.css';

class Login extends Component {
    
    render() {
      return (
          <Nav
            bsStyle="tabs"
            justified
            activeKey={1}>
                <NavItem 
                    eventKey={1} 
                    href={process.env.REACT_APP_LOGIN}>
                    Login
                </NavItem>
          </Nav>
        );
    }
}
  
export default Login;