import React from "react";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";

const AppTableRow = ({ app, admin }) => {
  let edit_button = "";
  let delete_button = "";
  if (admin) {
    edit_button = (
      <td>
        <Button bsSize="xsmall" bsStyle="warning">
          Edit
        </Button>
      </td>
    );
    delete_button = (
      <td>
        <Button bsSize="xsmall" bsStyle="danger">
          Delete
        </Button>
      </td>
    );
  }
  return (
    <tr className="AppTableRow">
      <td>
        {app.id}
      </td>
      <td>
        {app.name}
      </td>
      <td>
        {app.url}
      </td>
      <td>
        {app.notify_emails.length} emails
      </td>
      {edit_button}
      {delete_button}
    </tr>
  );
};

AppTableRow.propTypes = {
  app: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    notify_emails: PropTypes.array.isRequired
  }).isRequired,
  admin: PropTypes.bool.isRequired
};

export default AppTableRow;
