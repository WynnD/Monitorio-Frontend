import React, { Component } from "react";
import "./App.css";
import { AdminPage } from "components/admin/";
import { Dashboard } from "components/dashboard/";
import { HeaderContainer } from "containers/common/";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { fetchApps, fetchRefreshRate } from "actions/";
class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    // TODO make apps refresh at refreshRate
    fetchRefreshRate();
    fetchApps();
    setInterval(fetchApps, 10000);
    // setTimeout(fetchCurrentAppVitals, 3000);
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter className="AppBody">
          <div>
            <HeaderContainer />
            <Route exact path="/" component={Dashboard} />
            <Route path="/admin" component={AdminPage} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
