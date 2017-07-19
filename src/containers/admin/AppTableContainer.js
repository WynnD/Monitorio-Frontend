import React from "react";
import AppTable from "components/admin/AppTable";
import { Row } from "react-bootstrap";
import { connect } from "react-redux";
import { toggleApp } from "actions/";

const mapStateToProps = state => {
  return {
    appList: state.appList
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: id => {
      dispatch(toggleApp(ownProps.app.app_id));
    }
  };
};

const AppTableContainer = connect(mapStateToProps)(AppTable);

export default AppTableContainer;
