import React from "react"
import {Switch , Route} from "react-router-dom"
import AdminUser from "./components/AdminUsers/AdminUsers";
import AdminSchedule from "./components/AdminSchedule/AdminSchedule";
import AdminInvoices from "./components/AdminInvoice/AdminInvoice"



export default (
    <Switch>
        <Route  path="/admin/schedule" component={AdminSchedule} />
        <Route  path="/admin/invoice" component={AdminInvoices} />
        <Route  path="/admin" component={AdminUser} />
    </Switch>
)