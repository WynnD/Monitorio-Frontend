import React from "react";
import { App } from "App";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    refreshRate: state.refreshRate
  };
};

let AppContainer = connect(mapStateToProps)(App);

export default AppContainer;
