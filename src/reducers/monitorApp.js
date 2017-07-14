import { combineReducers } from "redux";
import currentPage from "./currentPage";
import isFetching from "./isFetching";
import appList from "./appList";
import routerReducer from "react-router-redux";

const monitorApp = combineReducers({
  currentPage,
  isFetching,
  appList,
  router: routerReducer
});

export default monitorApp;
