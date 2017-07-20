import {
  FETCH_APPS,
  DELETE_APP,
  ADD_APP,
  TOGGLE_APP
} from "actions/";

function match(x, y) {
  return x === y;
}

const convertAllStatusesToBool = apps => {
  return apps.map((app) => {
    app.is_active = !!(app.is_active == 1);
    return app;
  });
};

const toggleAppWithId = (id, apps) => {
  console.log('checking apps');
  return apps.map((app) => {
    if (app.app_id === id) {
      console.log('toggling app', app);
      app.is_active = !app.is_active;
      console.log('now app is', app);
      return app;
    }
    return app;
  });
};

function appList(state = [], action) {
  switch (action.type) {
    case `${FETCH_APPS}_FULFILLED`:
      return convertAllStatusesToBool(action.payload.data);
    case `${DELETE_APP}_FULFILLED`:
      return state.filter(app => {
        return !match(app.app_id, action.meta.id);
      });
    case `${ADD_APP}_FULFILLED`:
      // TODO add application to list
      return state;

    case `${TOGGLE_APP}_FULFILLED`:
      return toggleAppWithId(action.meta.app_id, state);
    default:
      return state;
  }
}

export default appList;
