import React from "react"
import {Switch,Route} from "react-router-dom"
import Home from "./components/Home/Home";
import Client from "./components/Client/Client";
import Admin from "./components/Admin/Admin";
import Login from "./components/Login/Login";


export default (
    <Switch>
        <Route  path="/client" component={Client} />
        <Route  path="/admin" component={Admin} />
        <Route  path="/login" component={Login} />
        <Route exact path="/" component={Home} />
    </Switch>
)