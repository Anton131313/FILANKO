import initState from "../initState";
import { GET_DOMAIN } from "../types/taskType";

const domainReducer = (state = initState.domains, action) => {
  switch (action.type) {
    case GET_DOMAIN:
      return action.payload;
    default:
      return state;
  }
}

export default domainReducer;
