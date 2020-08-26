import React from 'react';
import './scss/main.scss';
import LandingPage from "./js/LandingPage/LandingPage";
import Log from "./js/SignLog/Log"
import Sign from "./js/SignLog/Sign"

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import MainApp from "./js/App/MainApp";


//tutaj renderowanie końcowe

function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route path={'/'} exact component={LandingPage}/>
                    <Route path={'/app/log'} component={Log}/>
                    <Route path={'/app/sign'} component={Sign}/>
                    <Route path={'/app/MainApp'} component={MainApp}/>
                </Switch>
            </Router>
        </>
    );
}

export default App;
