import { GET_ACCOUNT } from "../types/taskType"

export const accountActions = (value) => {
  return {
    type: GET_ACCOUNT,
    payload: value
  }
}
