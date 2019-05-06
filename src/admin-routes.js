import React from "react"
import {Switch , Route} from "react-router-dom"
import ClientAccount from "./Components/ClientAccount/ClientAccount"
import ClientInvoice from "./Components/ClientInvoice/ClientInvoice"
import AdminUser from "./Components/AdminUsers/AdminUsers";



export default (
    <Switch>
        <Route  path="/admin/account" component={ClientAccount} />
        <Route  path="/admin/invoice" component={ClientInvoice} />
        <Route  path="/admin" component={AdminUser} />
    </Switch>
)