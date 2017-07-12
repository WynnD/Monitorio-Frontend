import React from "react";
import { AddAppForm } from "admin";

class AppFormContainer extends React.Component {
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
  }

  handleClick(event) {
    event.preventDefault();
    // do other things
  }

  render() {
    return (
      <div className="AppFormContainer">
        <AddAppForm onClick={this.handleClick} />
      </div>
    );
  }
}

export default AppFormContainer;
