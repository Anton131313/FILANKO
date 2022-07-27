import initState from "../initState";
import { GET_COMMENT } from "../types/taskType";

const commentReducer = (state = initState.comment, action) => {
  switch (action.type) {
    case GET_COMMENT:
      return action.payload;
    default:
      return state;
  }
}

export default commentReducer;
