import React from "react";
import { Header } from "components/common/";

class HeaderContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active_page: 1
    };
  }

  render() {
    return <Header activeKey={this.state.active_page} />;
  }
}

export default HeaderContainer;
