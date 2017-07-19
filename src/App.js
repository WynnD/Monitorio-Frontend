import React, { Component } from "react";
import "./App.css";
import { AdminPage } from "components/admin/";
import { Dashboard } from "components/dashboard/";
import { HeaderContainer } from "containers/common/";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { getState } from "react-redux";
import createHistory from "history/createBrowserHistory";
import { fetchApps, fetchRefreshRate, fetchCurrentAppVitals } from "actions/";
class App extends Component {
  constructor(props) {
    super(props);
    this.history = createHistory();
  }

  componentWillMount() {
    // TODO make apps refresh at refreshRate
    fetchRefreshRate();
    fetchApps();
    // setTimeout(fetchCurrentAppVitals, 3000);
  }

  render() {
    return (
      <div className="App">
        <HeaderContainer />
        <BrowserRouter history={this.history} className="AppBody">
          <div>
            <Route exact path="/" component={Dashboard} />
            <Route path="/admin" component={AdminPage} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
