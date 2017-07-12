import React, { Component } from "react";
import "./App.css";
import { AdminPage } from "components/admin/";
import { Dashboard } from "components/dashboard/";
import { HeaderContainer } from "containers/common/";
import { Router, Route } from "react-router";
import createHistory from "history/createBrowserHistory";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderContainer />
        {/*
        <Router history={createHistory}>
          <Route path="/admin" component={AdminPage} />
          <Route path="/dashboard" component={Dashboard} />
        </Router>
        */}
        <AdminPage />
      </div>
    );
  }
}

export default App;
