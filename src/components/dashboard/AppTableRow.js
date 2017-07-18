import React from "react";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";

const AppTableRow = ({ app }) => {
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
        {app.product_name}
      </td>
      <td>Running (60ms)</td>
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
  }).isRequired
};

export default AppTableRow;
