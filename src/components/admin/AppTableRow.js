import React from "react";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { deleteApp } from "actions/";

const AppTableRow = ({ app, deleteApp }) => {
  return (
    <tr className="AppTableRow">
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
      <td>
        {app.notify_emails.length} emails
      </td>
      <td>
        <Button bsSize="xsmall" bsStyle="warning">
          <span className="glyphicon glyphicon-pencil" />
        </Button>
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
  deleteApp: PropTypes.func.isRequired
};

export default AppTableRow;