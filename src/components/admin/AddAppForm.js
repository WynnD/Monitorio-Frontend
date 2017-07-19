import React from "react";
import { Col, Row } from "react-bootstrap";
import { reduxForm, Field } from "redux-form";
import PropTypes from "prop-types";

let AddAppForm = ({ handleSubmit }) =>
  <form onSubmit={handleSubmit} className="AddAppForm">
    <Row>
      <Col sm={6}>
        <label htmlFor="app_name">App Name</label>
        <Field name="app_name" component="input" type="text" />
      </Col>
      <Col sm={6}>
        <label htmlFor="notify_email">Notify Emails</label>
        <Field name="notify_email" component="input" type="text" />
      </Col>
    </Row>
    <Row>
      <Col sm={8}>
        <label htmlFor="api_url">API URL</label>
        <Field name="api_url" component="input" type="url" />
      </Col>
      <Col sm={3} smOffset={1}>
        <label htmlFor="format">API Format</label>
        <Field name="format" component="select" componentClass="SelectFormat">
          <option value="json">json</option>
          <option value="xml">xml</option>
        </Field>
      </Col>
    </Row>
    <Row>
      <Col sm={2} smOffset={5}>
        <Field component="button" type="submit">
          Add
        </Field>
      </Col>
    </Row>
  </form>;

AddAppForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

AddAppForm = reduxForm({
  form: "add_app"
})(AddAppForm);

export default AddAppForm;
