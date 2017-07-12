import React from "react";
import { AppTable } from "components/dashboard/";
import { Row } from "react-bootstrap";
import { connect } from "react-redux";

class AppTableContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appList: [
        {
          id: 1,
          name: "tom",
          url: "sdfjsklaf",
          notify_emails: ["sadfasf"]
        },
        {
          id: 2,
          name: "tm",
          url: "sjsklaf",
          notify_emails: ["saasf"]
        }
      ]
    };

    console.log(this.state.appList);
  }
  render() {
    return (
      <div className="AppTableContainer">
        <Row>
          <AppTable appList={this.state.appList} />
        </Row>
      </div>
    );
  }
}

export default AppTableContainer;

/*

const mapStateToProps = state => {
  return {
    appList: state.appList
  };
};

const AppTableContainer = connect(mapStateToProps)(AppTable);
*/
