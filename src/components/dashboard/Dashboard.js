import React from "react";
import { AppTableContainer } from "containers/dashboard/";
import { Col } from "react-bootstrap";

const Dashboard = () =>
  <Col className="DashboardPanel" sm={8} smOffset={2}>
    <AppTableContainer />
  </Col>;

export default Dashboard;
