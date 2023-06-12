import * as types from "../AuthReducer/actionType"


const intialState={
    isAuth: false,
    token:"",
    isLoading:false,
    isError: false,

}

const reducer=(oldstate= intialState, action)=>{
    const {type,payload}= action
    switch(type){
        case types.GET_LOGIN_REQUEST:{
            return {
                ...oldstate,
                isLoading: true,
                
            
            }
        }
        case types.GET_LOGIN_SUCCESS:{
            return {
                ...oldstate,
                isLoading: false,
                isError: false,
                token: payload,
                isAuth: true
            }
        }
        case types.GET_LOGIN_FAILURE:{
            return {
                ...oldstate,
                isLoading: false,
                isError: true,
                token: "",
                isAuth: false
            }
        }
        default:{
            return oldstate
        }
    }

}

export {reducer}