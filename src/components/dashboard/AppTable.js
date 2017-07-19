import React from "react";
import { Table, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import { AppTableRow } from "dashboard/";

const AppTable = ({ appList }) =>
  <Row className="AppTable">
    <Table bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Application Name</th>
          <th>API URL</th>
          <th>Product Name</th>
          <th>Status</th>
          <th>Latency</th>
        </tr>
      </thead>
      <tbody>
        {appList.map(app => {
          if (app.is_active) {
            return <AppTableRow key={app.app_id} app={app} />;
          }
          return null;
        })}
      </tbody>
    </Table>
  </Row>;

AppTable.propTypes = {
  appList: PropTypes.array
};

export default AppTable;
