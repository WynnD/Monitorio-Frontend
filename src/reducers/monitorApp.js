import { combineReducers } from "redux";
import isFetching from "./isFetching";
import appList from "./appList";
import { reducer as formReducer } from "redux-form";
import currentPage from "./currentPage";
import refreshRate from "./refreshRate";

const status = combineReducers({
  currentPage,
  refreshRate
});

const monitorApp = combineReducers({
  status,
  isFetching,
  appList,
  form: formReducer.plugin({
    add_app: (state, action) => {
      switch(action.type) {
        case 'ADD_APP_FULFILLED':
          return undefined;
        default:
          return state;
      }
    }
  })
});

export default monitorApp;
