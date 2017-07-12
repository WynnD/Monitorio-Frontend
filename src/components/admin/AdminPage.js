import React from "react";
import { AppTableContainer, AppFormContainer } from "containers/admin/";
import { Col } from "react-bootstrap";

const AdminPage = () =>
  <Col className="AdminPanel" sm={8} smOffset={2}>
    <AppTableContainer />
    <Col className="AdminPanelForm" sm={8} smOffset={2}>
      <AppFormContainer />
    </Col>
  </Col>;

export default AdminPage;
