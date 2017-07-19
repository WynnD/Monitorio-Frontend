import {
  FETCH_APPS,
  DELETE_APP,
  ADD_APP,
  FETCH_CURRENT_APP_VITALS
} from "actions/";

function match(x, y) {
  return x === y;
}

function addLogsToApps(state, rows) {
  let appList = state;
  rows.forEach(row => {
    const app_index = appList.findIndex(app => {
      return app.app_id === row.app_id;
    });

    appList[app_index] = row;
  });

  return appList;
}

function appList(state = [], action) {
  switch (action.type) {
    case `${FETCH_APPS}_FULFILLED`:
      return action.payload.data;
    case `${DELETE_APP}_FULFILLED`:
      return state.filter(app => {
        return !match(app.app_id, action.meta.id);
      });
    case `${ADD_APP}_FULFILLED`:
      // TODO add application to list
      return state;

    /*
    case `${FETCH_CURRENT_APP_VITALS}_FULFILLED`:
      return addLogsToApps(state, action.payload.data.recordset);
      */

    default:
      return state;
  }
}

export default appList;
