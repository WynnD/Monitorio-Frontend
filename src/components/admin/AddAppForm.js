import React from "react";
import { reduxForm, Field } from "redux-form";
import PropTypes from "prop-types";

let AddAppForm = ({ handleSubmit }) =>
  <form onSubmit={handleSubmit} className="AddAppForm form-inline">

    <div className="form-group">
				<Field name="app_name" component="input" placeholder="App Name" type="text" className="form-control" />
		</div>

    <div className="form-group">
				<Field name="api_url" component="input" placeholder="API URL" type="url" className="form-control" />
		</div>

    <div className="form-group">
				<Field name="notify_email" component="input" placeholder="Notify Emails (comma separated)" type="text" className="form-control" />
		</div>

    <Field name="submit" component="button" type="submit" className="btn btn-primary">
      Add App
    </Field>
  </form>;

AddAppForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

AddAppForm = reduxForm({
  form: "add_app"
})(AddAppForm);

export default AddAppForm;
