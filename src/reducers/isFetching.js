import { FETCH_APPS, DELETE_APP, ADD_APP } from "actions/";

function isFetching(state = false, action) {
  switch (action.type) {
    case `${FETCH_APPS}_PENDING`:
      return true;
    case `${FETCH_APPS}_FULFILLED`:
      return false;
    case `${FETCH_APPS}_REJECTED`:
      return false;
    case `${DELETE_APP}_PENDING`:
      return true;
    case `${DELETE_APP}_FULFILLED`:
      return false;
    case `${DELETE_APP}_REJECTED`:
      return false;
    case `${ADD_APP}_PENDING`:
      return true;
    case `${ADD_APP}_FULFILLED`:
      return false;
    case `${ADD_APP}_REJECTED`:
      return false;
    default:
      return state;
  }
}

export default isFetching;
