import React from "react";
import { Table, Row } from "react-bootstrap";
/*
import AppItem from './AppItem';
import API from '../api';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';
*/
import PropTypes from "prop-types";
import { AppTableRowContainer } from "containers/admin";

const AppTable = ({ appList }) =>
  <Row className="AppTable">
      <Table responsive hover>
        <thead>
          <tr>
            <th></th>
            <th>ID</th>
            <th>Application Name</th>
            <th>API URL</th>
            <th>Notification</th>
          </tr>
        </thead>
        <tbody>
          {appList.map(app =>
            <AppTableRowContainer key={app.app_id} app={app} />
          )}
        </tbody>
      </Table>
  </Row>;

AppTable.propTypes = {
  appList: PropTypes.array.isRequired
};

export default AppTable;
