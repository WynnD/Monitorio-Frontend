import { combineReducers } from "redux";
import currentPage from "./currentPage";
import isFetching from "./isFetching";
import appList from "./appList";
import { reducer as formReducer } from "redux-form";

const monitorApp = combineReducers({
  currentPage,
  isFetching,
  appList,
  form: formReducer
});

export default monitorApp;
