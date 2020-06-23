import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import theme from './styles/theme';

import Main from "./pages/Main";
import Chat from "./pages/Chat";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <ThemeProvider theme={theme}>
                <Route exact path="/" component={Main} />
                <Route path="/chat" component={Chat} />
            </ThemeProvider>
        </Switch>
    </BrowserRouter>
);

export default Routes;