import AppTable from "components/dashboard/AppTable";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    appList: state.appList
  };
};

const AppTableContainer = connect(mapStateToProps)(AppTable);

export default AppTableContainer;
