import React from "react";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";

const AppTableRow = ({ app, admin }) => {
  let edit_button = "";
  let delete_button = "";
  let notify_email = "";
  let product_name = "";
  let status = "";
  if (admin) {
    edit_button = (
      <td>
        <Button bsSize="xsmall" bsStyle="warning">
          <span className="glyphicon glyphicon-pencil" />
        </Button>
      </td>
    );
    notify_email = (
      <td>
        {app.notify_email}
      </td>
    );
    delete_button = (
      <td>
        <Button bsSize="xsmall" bsStyle="danger">
          <span className="glyphicon glyphicon-remove" />
        </Button>
      </td>
    );
  } else {
    status = <td>Running (60ms)</td>;
    product_name = (
      <td>
        {app.product_name}
      </td>
    );
  }
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
      {product_name}
      {notify_email}
      {status}
      {edit_button}
      {delete_button}
    </tr>
  );
};

AppTableRow.propTypes = {
  app: PropTypes.shape({
    app_id: PropTypes.number.isRequired,
    app_name: PropTypes.string.isRequired,
    api_url: PropTypes.string.isRequired,
    notify_email: PropTypes.string.isRequired
    // notify_emails: PropTypes.array.isRequired
  }).isRequired,
  admin: PropTypes.bool.isRequired
};

export default AppTableRow;
