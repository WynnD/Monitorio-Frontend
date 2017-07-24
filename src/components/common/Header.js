import React from "react";
import { Nav, NavItem } from "react-bootstrap";
import {IndexLinkContainer, LinkContainer} from "react-router-bootstrap";

const Header = () =>
  <Nav bsStyle="tabs">
    <IndexLinkContainer to="/">
      <NavItem>
        Dashboard
      </NavItem>
    </IndexLinkContainer>
    <LinkContainer to="/admin">
      <NavItem>
        Admin
      </NavItem>
    </LinkContainer>
  </Nav>;

export default Header;
