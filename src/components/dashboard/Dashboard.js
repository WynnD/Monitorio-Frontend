import React from "react";
import { AppTableContainer } from "containers/dashboard/";
import { Col } from "react-bootstrap";

const Dashboard = () =>
  <Col className="DashboardPanel" sm={10} smOffset={1}>
    <AppTableContainer />
  </Col>;

export default Dashboard;
