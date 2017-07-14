import React from "react";
import AddAppForm from "components/admin/AddAppForm";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addApp } from "actions/";

let mapStateToProps = state => {
  return {};
};

let mapDispatchToProps = dispatch => {
  return {
    onClick: new_app => {
      dispatch(addApp(new_app));
    }
  };
};

const AppFormContainer = connect(mapStateToProps, mapDispatchToProps)(
  AddAppForm
);

export default AppFormContainer;
