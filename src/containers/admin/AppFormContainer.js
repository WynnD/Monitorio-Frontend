import React from "react";
import AddAppForm from "components/admin/AddAppForm";
import { addApp } from "actions/";

class AppFormContainer extends React.Component {
  submit = (values, dispatch) => {
    // print the form values to the console
    if (this.validate(values)) {
      dispatch(addApp(values));
    }
    console.log(values);
  };

  validate = (values) => {
    if (values.app_name === '') {
      return false;
    }
    return true;
  }

  render() {
    return <AddAppForm onSubmit={this.submit} />;
  }
}

export default AppFormContainer;
