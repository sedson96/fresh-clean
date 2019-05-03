import axios from "axios";

const initialState = {
    invoices: []
}

export const GET_INVOICES = "GET_INVOICES"

function getInvoices (id) {
    return {
        type: GET_INVOICES,
        payload: axios.getUserInvoices("api/invoice/user")
    }
}
function reducer (state=initialState,action) {
    const {type,payload} = action;
    switch(type){
        default: return state
    }
}

export default reducer