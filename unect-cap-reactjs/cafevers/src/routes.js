import { Switch, Route } from "react-router";
import React from "react";

import MainPage from './pages/MainPage';
import TaskPage from './pages/TaskPage';

function Rotas()
{
    return(
        <Switch>
            <Route exact path="/" component={MainPage}/>
            <Route path="/taskpage" component={TaskPage}/>
        </Switch>
    );
}

export default Rotas;