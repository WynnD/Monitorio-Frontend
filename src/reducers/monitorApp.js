import { combineReducers } from "redux";
import isFetching from "./isFetching";
import appList from "./appList";
import { reducer as formReducer } from "redux-form";
import currentPage from "./currentPage";
import refreshRate from "./refreshRate";

const status = combineReducers({
  currentPage,
  refreshRate
});

const monitorApp = combineReducers({
  status,
  isFetching,
  appList,
  form: formReducer
});

export default monitorApp;
