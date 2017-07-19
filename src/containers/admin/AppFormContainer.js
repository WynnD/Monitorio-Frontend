import React from "react";
import AddAppForm from "components/admin/AddAppForm";
import PropTypes from "prop-types";
import { connect, dispatch } from "react-redux";
import { addApp } from "actions/";

class AppFormContainer extends React.Component {
  submit = (values, dispatch) => {
    // dispatch(addApp(formData));
    // print the form values to the console
    dispatch(addApp(values));
    console.log(values);
  };

  render() {
    return <AddAppForm onSubmit={this.submit} />;
  }
}

export default AppFormContainer;
