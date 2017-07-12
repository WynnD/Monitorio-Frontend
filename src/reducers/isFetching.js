import {
  FETCH_APPS_REQUEST,
  FETCH_APPS_SUCCESS,
  FETCH_APPS_FAILURE
} from "actions/";

function isFetching(state = false, action) {
  switch (action.type) {
    case FETCH_APPS_REQUEST:
      return true;
    case FETCH_APPS_SUCCESS:
      return false;
    case FETCH_APPS_FAILURE:
      return false;
    default:
      return state;
  }
}

export default isFetching;
