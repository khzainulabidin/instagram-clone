import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Home from "./pages/Home/Home";

const App = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path={'/'} component={Login} exact/>
                <Route path={'/signup'} component={SignUp} exact/>
                <Route path={'/home'} component={Home} exact/>
            </Switch>
        </BrowserRouter>
    )
}

export default App;
