import React from "react";
import { AppTableContainer } from "containers/dashboard/";
import { Row } from "react-bootstrap";

const Dashboard = () =>
  <Row className="DashboardPanel">
    <AppTableContainer />
  </Row>;

export default Dashboard;
