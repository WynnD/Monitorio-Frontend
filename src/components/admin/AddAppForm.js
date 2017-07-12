import React from "react";
import {
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
  Form,
  Col,
  Row
} from "react-bootstrap";
// import EmailList from './EmailList';
import PropTypes from "prop-types";

const AddAppForm = ({ onClick }) =>
  <Form horizontal className="AddAppForm">
    <FormGroup controlId="formAppInfo">
      <Col sm={6}>
        <ControlLabel>App Name</ControlLabel>
        <FormControl type="text" />
      </Col>
      <Col sm={6}>
        <ControlLabel>Notify Emails</ControlLabel>
        <FormControl type="text" />
      </Col>
    </FormGroup>
    <Col sm={8}>
      <FormGroup controlId="formApiUrl">
        <ControlLabel>API URL</ControlLabel>
        <FormControl type="url" />
      </FormGroup>
    </Col>
    <Col sm={3} smOffset={1}>
      <FormGroup controlId="formApiFormat">
        <ControlLabel>API Format</ControlLabel>
        <FormControl componentClass="select">
          <option value="json">json</option>
          <option value="xml">xml</option>
        </FormControl>
      </FormGroup>
    </Col>

    <Row>
      <Col sm={2} smOffset={5}>
        <Button
          bsSize="large"
          type="submit"
          bsStyle="primary"
          onClick={onClick}
        >
          Add
        </Button>
      </Col>
    </Row>
  </Form>;

AddAppForm.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default AddAppForm;
