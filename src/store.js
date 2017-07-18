import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import monitorApp from "reducers/";
import promiseMiddleware from "redux-promise-middleware";
import thunk from "redux-thunk";

let store = createStore(
  monitorApp,
  {},
  applyMiddleware(promiseMiddleware(), logger)
);

const dispatch = store.dispatch;

export default store;
export { dispatch };
