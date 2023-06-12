import * as types from "./actionType";
import axios from "axios";

const login = (payload) => (dispatch) => {
  dispatch({ type: types.GET_LOGIN_REQUEST });
  return axios({
    method: "post",
    url: "https://reqres.in/api/login",
    data: payload,
  })
    .then((res) => {
      console.log(res.data);
      return( dispatch({
        type: types.GET_LOGIN_SUCCESS,
        payload: res.data.token,
      }));
    })
    .catch((err) => {
      dispatch({ type: types.GET_LOGIN_FAILURE });
    });
};

 const update= (id, payload)=>dispatch=> {
  dispatch({ type: types.UPDATE_MUSIC_REQUEST });
  return axios({
    method: "patch",
    url: `http://localhost:8080/albums/${id}`,
    data: payload,
  })
    .then((res) => {
      console.log(res.data);
      return( dispatch({
        type: types.UPDATE_MUSIC_SUCCESS,
        payload: res.data.token,
      }));
    })
    .catch((err) => {
      dispatch({ type: types.UPDATE_MUSIC_FAILURE });
    });
 }


export { login, update };
