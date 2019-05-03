import axios from "axios";

const initialState = {
    username: "",
    isAdmin: false
}

const GET_SESSION = "GET_SESSION"
const SET_SESSION = "SET_SESSION"

export function getSession () {
    return {
        type: GET_SESSION,
        payload: axios.get("/auth/user")
    }
}
export function setSession(session) {
    return {
        type: SET_SESSION,
        payload: session
    }
}

function reducer(state=initialState, action) {
    const {type,payload} = action;
    switch(type){
        case `${GET_SESSION}_FULFILLED`: 
            return {
                ...state,
                username: payload.data.username,
                isAdmin: payload.data.isAdmin,
            }
        case SET_SESSION: 
            console.log(payload)
            return {
                ...state,
                username: payload.username,
                isAdmin: payload.isAdmin,
            }
        default: return state
    }
}

export default reducer 