import React from "react";
import { Navbar, NavItem, Row, Icon } from 'react-materialize';

import logo from '../../images/logo.png';
import './index.css';

const Header = () => (
  <Row>
    <Navbar brand={<img src={logo} alt="OneBitTwitter" 
    className="responsive-img col m6 center logo" />} right className="navbar">
      <NavItem href='/logout'>
        Logout
      </NavItem>
      <NavItem href='/user/x/edit'>
          <Icon class="icon_user">account_circle</Icon>
      </NavItem>
    </Navbar>
  </Row>
);

export default Header;