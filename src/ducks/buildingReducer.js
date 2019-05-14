import axios from "axios"

const initialState = {
    buildings: [],
    usersBuildings: []
}

export const GET_BUILDINGS = "GET_BUILDINGS"
export const GET_USER_BUILDING = "GET_USER_BUILDING"

export function getBuildings () {
    return {
        type: GET_BUILDINGS,
        payload: axios.get("/api/buildings")
    }
}
export function getUserbuildings (id) {
    return {
        type: GET_USER_BUILDING,
        payload: axios.get(`/api/buildings/${id}`)
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
        case `${GET_USER_BUILDING}_FULFILLED`: 
            return {
                ...state,
                usersBuildings: payload.data
            }
        default: return state
    }
}

export default reducer