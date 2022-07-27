import { GET_DOMAIN } from "../types/taskType"

export const domainActions = (value) => {
  return {
    type: GET_DOMAIN,
    payload: value
  }
}
