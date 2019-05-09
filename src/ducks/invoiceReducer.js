import axios from "axios";

const initialState = {
    invoices: []
}

export const GET_INVOICES = "GET_INVOICES"

export function getUserInvoices (id) {
    return {
        type: GET_INVOICES,
        payload: axios.getUserInvoices("api/invoice/user")
    }
}
export function getInvoices () {
    return {
        type: GET_INVOICES,
        payload: axios.get("/api/admin/invoices")
    }
}
function reducer (state=initialState,action) {
    const {type,payload} = action;
    console.log(action)
    switch(type){
        case `${GET_INVOICES}_FULFILLED`: 
            return {
                ...state,
                invoices: payload.data
            }
        default: return state
    }
}

export default reducer