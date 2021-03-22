import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import theme from './styles/theme';

import Main from "./pages/Main";
import Chat from "./pages/Chat";
import Protector from "./pages/Protector";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <ThemeProvider theme={theme}>
                <Route exact path="/" component={Main} />
                <Protector path="/chat" Component={Chat} />
            </ThemeProvider>
        </Switch>
    </BrowserRouter>
);

export default Routes;