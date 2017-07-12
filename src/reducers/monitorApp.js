import { combineReducers } from "redux";
import currentPage from "./currentPage";
import isFetching from "./isFetching";
import appList from "./appList";

const monitorApp = combineReducers({
  currentPage,
  isFetching,
  appList
});

export default monitorApp;
