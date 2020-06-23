import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./pages/Main";
import Chat from "./pages/Chat";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/chat" component={Chat} />
        </Switch>
    </BrowserRouter>
);

export default Routes;