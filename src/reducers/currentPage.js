import { CHANGE_PAGE } from "actions/";

function currentPage(state = 1, action) {
  switch (action.type) {
    case CHANGE_PAGE:
      return action.payload.id;
    default:
      return state;
  }
}

export default currentPage;
