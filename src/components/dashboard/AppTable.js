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
          <th>Active</th>
          <th>Application Name</th>
          <th>Product Name</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {appList.map(app => <AppTableRow key={app.app_id} app={app} />)}
      </tbody>
    </Table>
  </Row>;

AppTable.propTypes = {
  appList: PropTypes.array
};

export default AppTable;
