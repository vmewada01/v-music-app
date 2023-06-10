import * as types from "../Redux/actionType"
import axios from "axios"


const getMusicRecordRequest =()=>{
  return {type: types.GET_MUSIC_RECORDS_REQUEST }
}

const getMusicRecord= (params) =>(dispatch)=>{
   dispatch(getMusicRecordRequest())
   return axios.get("http://localhost:8080/albums",params)
   .then((res)=>{
    return dispatch({
        type: types.GET_MUSIC_RECORDS_SUCCESS,
        payload: res.data
    })
    .catch((err)=> {
        return dispatch({type: types.GET_MUSIC_RECORDS_FAILURE})
    })
   })
}

export {getMusicRecord}