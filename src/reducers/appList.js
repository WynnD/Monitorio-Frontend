import { FETCH_APPS_SUCCESS } from "actions/";

function appList(state = [], action) {
  switch (action.type) {
    case FETCH_APPS_SUCCESS:
      return action.payload.appList;
    default:
      return state;
  }
}

export default appList;
