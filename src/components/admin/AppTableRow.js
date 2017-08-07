import React from "react";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { Field, reduxForm, FormSection } from "redux-form";

let AppTableRow = ({ app, deleteApp, toggleApp }) => {
  return (
    <tr className="AppTableRow">
      <td>
        <FormSection name={app.app_name.toString()}>
          <Field
            name="is_active"
            component="input"
            type="checkbox"
            checked={app.is_active}
            onChange={toggleApp}
          />
        </FormSection>
      </td>
      <td>
        {app.app_id}
      </td>
      <td>
        {app.app_name}
      </td>
      <td>
        <a href={app.api_url}>
          {app.api_url}
        </a>
      </td>
      <td title={app.notify_emails.toString()}>
        {app.notify_emails.length} emails
      </td>
      <td>
        <Button bsSize="xsmall" bsStyle="danger" onClick={deleteApp}>
          <span className="glyphicon glyphicon-remove" />
        </Button>
      </td>
    </tr>
  );
};

AppTableRow.propTypes = {
  app: PropTypes.shape({
    app_id: PropTypes.number.isRequired,
    app_name: PropTypes.string.isRequired,
    api_url: PropTypes.string.isRequired,
    notify_emails: PropTypes.array.isRequired
  }).isRequired,
  deleteApp: PropTypes.func.isRequired,
  toggleApp: PropTypes.func.isRequired
};

AppTableRow = reduxForm({
  form: "is_active"
})(AppTableRow);

export default AppTableRow;
