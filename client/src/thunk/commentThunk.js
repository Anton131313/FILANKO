import axios from "axios"
import { commentActions } from "../redux/actions/commentActions";
const { REACT_APP_HOST: host } = process.env;

export const getCommentFromServer = () => async (dispatch) => {
  try {
    const res = await axios.get(`${host}/allComment`);
    dispatch(commentActions(res.data))
  } catch (err) {
    console.log(err);
  }
}

// Добавление нового комментария в базу
export const addComment = (formData) => {
  console.log(formData);
  axios.post(`${host}/postNewComment`, formData)
}
