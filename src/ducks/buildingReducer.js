import axios from "axios"

const initialState = {
    buildings: []
}

export const GET_BUILDINGS = "GET_BUILDINGS"

export function getBuildings () {
    return {
        type: GET_BUILDINGS,
        payload: axios.get("/api/buildings")
    }
}
function reducer (state=initialState,action) {
    const {type,payload} = action;
    console.log(action)
    switch(type){
        case `${GET_BUILDINGS}_FULFILLED`: 
            return {
                ...state,
                buildings: payload.data
            }
        default: return state
    }
}

export default reducer