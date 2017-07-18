import { FETCH_APPS, DELETE_APP, ADD_APP } from "actions/";

function match(x, y) {
  return x === y;
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
      return state;
    default:
      return state;
  }
}

export default appList;
