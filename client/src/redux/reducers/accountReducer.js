import initState from "../initState";
import { GET_ACCOUNT } from "../types/taskType";

const accountReducer = (state = initState.account, action) => {
  switch (action.type) {
    case GET_ACCOUNT:
      return action.payload;
    default:
      return state;
  }
}

export default accountReducer;
