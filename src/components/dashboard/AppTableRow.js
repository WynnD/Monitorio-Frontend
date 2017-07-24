import React from "react";
import PropTypes from "prop-types";

const icons = {
  ok: <span className="glyphicon glyphicon-ok-sign" />,
  warning: <span className="glyphicon glyphicon-info-sign" />,
  danger: <span className="glyphicon glyphicon-remove-sign" />
};

const AppTableRow = ({ app }) => {
  let icon = "";
  if (app.result === 1) {
    if (app.ping_ms < 60) {
      icon = icons.ok;
    } else {
      icon = icons.warning;
    }
  } else {
    icon = icons.danger;
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
      <td>
        {app.product_name}
      </td>
      <td>
        {icon}
      </td>
      <td>
        {app.ping_ms} ms
      </td>
    </tr>
  );
};

AppTableRow.propTypes = {
  app: PropTypes.shape({
    app_id: PropTypes.number.isRequired,
    app_name: PropTypes.string.isRequired,
    api_url: PropTypes.string.isRequired,
    product_name: PropTypes.string.isRequired,
    ping_ms: PropTypes.number.isRequired
    // notify_emails: PropTypes.array.isRequired
  }).isRequired
};

export default AppTableRow;
