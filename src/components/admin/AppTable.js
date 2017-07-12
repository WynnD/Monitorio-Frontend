import React from "react";
import { Table } from "react-bootstrap";

/*
import AppItem from './AppItem';
import API from '../api';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';
*/
import PropTypes from "prop-types";
import { AppTableRow } from "common/";

const AppTable = ({ appList }) =>
  <div className="AppTable">
    <Table bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Application Name</th>
          <th>API URL</th>
          <th>Notification</th>
          {/* <th>Edit</th>
                    <th>Delete</th> */}
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
  appList: PropTypes.array.isRequired
};

export default AppTable;
