import React from "react";
import { Nav, NavItem } from "react-bootstrap";
import PropTypes from "prop-types";

const Header = ({ activeKey, handleSelect }) =>
    <Nav bsStyle="tabs" activeKey={activeKey} onSelect={handleSelect}>
        <NavItem eventKey={1} href="/dashboard">
            Dashboard
        </NavItem>
        <NavItem eventKey={2} href="/admin">
            Admin
        </NavItem>
    </Nav>;

Header.propTypes = {
    activeKey: PropTypes.number,
    handleSelect: PropTypes.func
};

export default Header;
