import React, { Component } from "react";
import "./App.css";
import { AdminPage } from "components/admin/";
import { Dashboard } from "components/dashboard/";
import { HeaderContainer } from "containers/common/";
import { Route } from "react-router";
import { Col, Row } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import { fetchApps, fetchRefreshRate } from "actions/";
import SpinnerContainer from "common/SpinnerContainer";

class App extends Component {

  componentWillMount() {
    // TODO make apps refresh at refreshRate
    fetchRefreshRate();
    fetchApps();
    setTimeout(fetchApps, 10000);
    // setTimeout(fetchCurrentAppVitals, 3000);
  }

  render() {
    return (
      <div className="App">
        <h1>Monitorio</h1>
        <BrowserRouter className="AppBody">
          <div className="container-fluid">
            <HeaderContainer />
            <Col sm={10} smOffset={1}>
              <Route exact path="/" component={Dashboard} />
              <Route path="/admin" component={AdminPage} />
              <Row>
                <SpinnerContainer/>
              </Row>
            </Col>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
