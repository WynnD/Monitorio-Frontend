import React from "react";
import { Button, Form, Col } from "react-bootstrap";
import { reduxForm, Field } from "redux-form";
import PropTypes from "prop-types";
import FormInput from "common/FormInput";

let AddAppForm = ({ handleSubmit }) =>
  <Form inline onSubmit={handleSubmit} className="AddAppForm">
    <Col sm={3}>
      <Field name="app_name" label="App Name" type="text" component={FormInput} />
      { /*
      <label htmlFor="app_name">App Name</label>
      <Field
        name="app_name"
        component="input"
        type="text"
        className="form-control"
      />
    */}
    </Col>

    <Col sm={3} smOffset={1}>
      <Field name="api_url" label="API URL" type="url" component={FormInput} />
      {/*
      <label htmlFor="api_url">API URL</label>
      <Field
        name="api_url"
        component="input"
        type="url"
        className="form-control"
      />
    */}
    </Col>

    <Col sm={3} smOffset={1}>
      <Field name="notify_email" label="Notify Emails" type="text" component={FormInput} />
      {/*
      <label htmlFor="notify_email">Notify Emails</label>
      <Field
        name="notify_email"
        component="input"
        type="text"
        className="form-control"
      /> */}
    </Col>

    <Field name="submit" component={Button} type="submit" bsStyle="primary">
      Add
    </Field>
  </Form>;

AddAppForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

AddAppForm = reduxForm({
  form: "add_app"
})(AddAppForm);

export default AddAppForm;
