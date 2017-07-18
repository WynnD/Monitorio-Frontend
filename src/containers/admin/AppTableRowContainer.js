import React from "react";
import AppTableRow from "components/admin/AppTableRow";
import { Row } from "react-bootstrap";
import { connect } from "react-redux";
import { deleteApp } from "actions/";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteApp: () => {
      dispatch(deleteApp(ownProps.app.app_id));
    }
  };
};

const mapStateToProps = (state, ownProps) => {
  return {
    app: ownProps.app
  };
};

const AppTableRowContainer = connect(mapStateToProps, mapDispatchToProps)(
  AppTableRow
);

export default AppTableRowContainer;
