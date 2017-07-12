export const ADD_APP = "ADD_APP";
export const TOGGLE_APP = "TOGGLE_APP";
export const EDIT_APP = "EDIT_APP";
export const DELETE_APP = "DELETE_APP";
export const FETCH_APPS_REQUEST = "FETCH_APPS_REQUEST";
export const FETCH_APPS_SUCCESS = "FETCH_APPS_SUCCESS";
export const FETCH_APPS_FAILURE = "FETCH_APPS_FAILURE";
export const CHANGE_PAGE = "CHANGE_PAGE";

export function changePage(id) {
  return {
    type: CHANGE_PAGE,
    payload: {
      id
    }
  };
}

export function addApp(app) {
  return {
    type: ADD_APP,
    payload: {
      app
    }
  };
}

export function toggleApp(id) {
  return {
    type: TOGGLE_APP,
    payload: {
      id
    }
  };
}

export function editApp(app) {
  return {
    type: EDIT_APP,
    payload: {
      app
    }
  };
}

export function deleteApp(id) {
  return {
    type: DELETE_APP,
    payload: {
      id
    }
  };
}

export function fetchAppsRequest() {
  return {
    type: FETCH_APPS_REQUEST
  };
}

export function fetchAppsSuccess(response) {
  // parse apps and enter them here
  const { appList } = JSON.parse(response);

  return {
    type: FETCH_APPS_SUCCESS,
    payload: {
      appList: appList
    }
  };
}

export function fetchAppsFailure(error) {
  return {
    type: FETCH_APPS_FAILURE,
    error: error
  };
}
