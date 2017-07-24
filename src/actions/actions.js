import { dispatch } from "store";
import axios from "axios";
import { format } from "util";
import { serverInfo } from "config";

// actions
export const ADD_APP = "ADD_APP";
export const TOGGLE_APP = "TOGGLE_APP";
export const EDIT_APP = "EDIT_APP";
export const DELETE_APP = "DELETE_APP";
export const FETCH_APPS = "FETCH_APPS";
export const CHANGE_PAGE = "CHANGE_PAGE";
export const FETCH_REFRESH_RATE = "FETCH_REFRESH_RATE";
export const FETCH_CURRENT_APP_VITALS = "FETCH_CURRENT_APP_VITALS";

const server = format("http://%s:%d", serverInfo.host, serverInfo.port);

// action creators
export function changePage(id) {
  return {
    type: CHANGE_PAGE,
    payload: {
      id
    }
  };
}

export function addApp(formData) {
  return {
    type: ADD_APP,
    payload: axios.post(format("%s/add-app", server), formData),
    meta: formData
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
    payload: axios.get(format("%s/delete-app?id=%d", server, id)),
    meta: { id }
  };
}

export function fetchApps() {
  dispatch({
    type: FETCH_APPS,
    payload: axios.get(format("%s/get-apps", server))
  });
}

export function fetchCurrentAppVitals() {
  dispatch({
    type: FETCH_CURRENT_APP_VITALS,
    payload: axios.get(format("%s/current-vitals", server))
  });
}

export function fetchRefreshRate() {
  dispatch({
    type: FETCH_REFRESH_RATE,
    payload: axios.get(format("%s/refresh-rate", server))
  });
}

export function toggleApp(id) {
  return {
    type: TOGGLE_APP,
    payload: axios.post(format("%s/toggle", server), { id }),
    meta: {
      app_id: id
    }
  };
}
