import { FETCH_APPS_SUCCESS } from "actions/";

const initialState = [
  {
    id: 1,
    name: "tom",
    url: "sdfjsklaf",
    notify_emails: ["sadfasf"]
  },
  {
    id: 2,
    name: "tm",
    url: "sjsklaf",
    notify_emails: ["saasf"]
  }
];

function appList(state = initialState, action) {
  switch (action.type) {
    case FETCH_APPS_SUCCESS:
      return action.payload.appList;
    default:
      return state;
  }
}

export default appList;
