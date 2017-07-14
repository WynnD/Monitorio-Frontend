import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import monitorApp from "reducers/";
import { routerMiddleware } from "react-router-redux";
import createHistory from "history/createBrowserHistory";
import promiseMiddleware from "redux-promise";

let store = createStore(
  monitorApp,
  {},
  applyMiddleware(promiseMiddleware, logger)
);

export default store;
