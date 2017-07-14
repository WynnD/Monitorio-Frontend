import React from "react";
import { Header } from "components/common/";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    activeKey: state.active_page
  };
};

let HeaderContainer = connect(mapStateToProps)(Header);

export default HeaderContainer;
