import React, {createContext, useState} from 'react';
import './scss/main.scss';
import LandingPage from "./js/LandingPage/LandingPage";
import Log from "./js/SignLog/Log"
import Sign from "./js/SignLog/Sign"
import MainApp from "./js/App/MainApp";

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import NewFormFirm from "./js/App/NewFormFirm";
import NewCardChoice from "./js/App/NewCardChoice";

const UserContext = createContext();


//tutaj renderowanie końcowe

function App(props) {

    const [dane, setDane] = useState({
        userEmail: "",
        userInfo: ""
    })

    const handleChange = (object) => {
        setDane({...dane, ...object})
    }

    return (
        <>
            <UserContext.Provider value={{dane, handleChange}}>
                {props.children}
            <Router>
                <Switch>
                    <Route path={'/'} exact component={LandingPage}/>
                    <Route path={'/app/log'} component={Log}/>
                    <Route path={'/app/sign'} component={Sign}/>
                    <Route path={'/app/MainApp'} component={MainApp}/>
                    <Route path={'/NewFormFirm'} component={NewFormFirm}/>
                    <Route path={'/NewCardChoice'} component={NewCardChoice}/>
                </Switch>
            </Router>
            </UserContext.Provider>
        </>
    );
}

export {App, UserContext};
