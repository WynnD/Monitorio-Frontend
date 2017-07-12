import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import monitorApp from "reducers/";

export default createStore(monitorApp, {}, applyMiddleware(logger));
