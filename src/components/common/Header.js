import React from "react";
import { Nav, NavItem } from "react-bootstrap";
import PropTypes from "prop-types";
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

Header.propTypes = {
  // activeKey: PropTypes.number,
  // handleSelect: PropTypes.func
};

export default Header;
