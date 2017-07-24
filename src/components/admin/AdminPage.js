import React from "react";
import { AppTableContainer, AppFormContainer } from "containers/admin/";
import { Row } from "react-bootstrap";
const AdminPage = () =>
  <div className="AdminPanel">
    <Row className="AdminPanelForm">
      <AppFormContainer />
    </Row>
    <Row>
		<AppTableContainer />
    </Row>
  </div>;

export default AdminPage;
