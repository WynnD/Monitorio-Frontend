import React from "react";
import AddAppForm from "components/admin/AddAppForm";
import PropTypes from "prop-types";
import { connect, dispatch } from "react-redux";
import { addApp } from "actions/";

class AppFormContainer extends React.Component {
  submit = (values, dispatch, props) => {
    // dispatch(addApp(formData));
    // print the form values to the console
    console.log(values);
    console.log(props);
  };

  render() {
    return <AddAppForm onSubmit={this.submit} />;
  }
}

export default AppFormContainer;
