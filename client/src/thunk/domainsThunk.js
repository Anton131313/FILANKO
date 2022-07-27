import axios from "axios";
import { domainActions } from "../redux/actions/domainActions";
const { REACT_APP_HOST: host } = process.env;

export const getDomainFromServer = () => async (dispatch) => {
  try {
    const res = await axios.get(`${host}/allDomain`);
    dispatch(domainActions(res.data))
  } catch (err) {
    console.log(err);
  }
}

export const delDomain = (id) => () => {
  try {
    // console.log(id);
    axios.delete(`${host}/delDomain/${id}`)
    .then.getDomainFromServer()
  } catch (err) {
    console.log(err);
  }
}

/* 
export const deleteProductFromDB = (id) => (dispatch) => {
  axios.delete(`${host}/bidding/${id}`)
    // .then((response) => console.log(response.data));
    .then(() => dispatch(deleteProduct(id)));
};
*/
