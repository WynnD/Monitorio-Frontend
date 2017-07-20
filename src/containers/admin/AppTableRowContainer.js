import React from "react";
import AppTableRow from "components/admin/AppTableRow";
import { connect } from "react-redux";
import { deleteApp, toggleApp } from "actions/";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteApp: () => {
      dispatch(deleteApp(ownProps.app.app_id));
    },
    toggleApp: () => {
      dispatch(toggleApp(ownProps.app.app_id));
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
