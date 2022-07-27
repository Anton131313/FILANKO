import { GET_COMMENT } from "../types/taskType"

export const commentActions = (value) => {
  return {
    type: GET_COMMENT,
    payload: value
  }
}
