import { FETCH_REFRESH_RATE } from "actions/";

const refreshRate = (state = 0, action) => {
  switch (action.type) {
    case `${FETCH_REFRESH_RATE}_FULFILLED`:
      return action.payload.data.refreshRate;
    default:
      return state;
  }
};

export default refreshRate;
