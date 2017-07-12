import React from "react";
import { Table } from "react-bootstrap";

/*
import API from '../api';
*/

import PropTypes from "prop-types";
import { AppTableRow } from "common/";

const AppTable = ({ appList }) =>
  <div className="AppTable">
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
        {appList.map(app =>
          <AppTableRow key={app.id} app={app} admin={true} />
        )}
      </tbody>
    </Table>
  </div>;

AppTable.propTypes = {
  appList: PropTypes.array
};

export default AppTable;
