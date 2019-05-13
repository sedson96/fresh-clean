import axios from "axios";

const initialState = {
    clients: []
}

export const GET_CLIENTS = "GET_CLIENTS"

export function getClients () {
    return {
        type: GET_CLIENTS,
        payload: axios.get("/api/clients")
    }
}
function reducer (state=initialState,action) {
    const {type,payload} = action;
    console.log(action)
    switch(type){
        case `${GET_CLIENTS}_FULFILLED`: 
            return {
                ...state,
                clients: payload.data
            }
        default: return state
    }
}

export default reducer