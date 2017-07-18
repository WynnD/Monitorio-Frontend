import { dispatch } from "store";
import { getAppList } from "api";
import axios from "axios";
import { format } from "util";

// actions
export const ADD_APP = "ADD_APP";
export const TOGGLE_APP = "TOGGLE_APP";
export const EDIT_APP = "EDIT_APP";
export const DELETE_APP = "DELETE_APP";
export const FETCH_APPS = "FETCH_APPS";
export const CHANGE_PAGE = "CHANGE_PAGE";

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
    payload: axios.post("http://127.0.0.1:2000/add-app", formData)
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
    payload: axios.get(format("http://127.0.0.1:2000/delete-app?id=%d", id)),
    meta: { id }
  };
}

export function fetchApps() {
  dispatch({
    type: FETCH_APPS,
    payload: axios.get("http://127.0.0.1:2000/get-apps")
  });
}
