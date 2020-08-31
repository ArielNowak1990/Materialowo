import React, {useState, useEffect} from 'react';
import LandingPageHeader2 from "../LandingPage/LandingPage_header2"
import Welcome from "../App/Welcome";
import NewForm from "./NewForm";

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {API_URL} from "../Fetch/fetch";
import ActualForm from "./ActualForm";
import HistoryForm from "./HistoryForm";
import NewCardChoice from "./NewCardChoice";
import ActualCardChoice from "./ActualCardChoice";



function MainApp() {

    const [name, setName] = useState(false)
    const [myUser, setMyUser] = useState(false)

    let adres = window.location.href;
    let arrayAdres = [...adres];
    let arrayGoodAdres = arrayAdres.slice(0,33);
    let goodAdres = "";
    for (let i=0; i<33; i++){ goodAdres=goodAdres+arrayGoodAdres[i]}
    let adresID = adres.replace(`${goodAdres}`,"");


    useEffect(() => {
        fetch(`${API_URL}/user/${adresID}`)
            .then(response => {
                if (response.ok === false) {
                    throw new Error("błąd sieci!")
                } else {
                    return response.json();
                }
            })
            .then(person => {
                setName(person.name)
                setMyUser(person)
            })
            .catch(err => console.log(err));

    },[])


    return (
    <>
        <Router>
            <Switch>
                <section className={"container"}>
                    <LandingPageHeader2/>
                    <Route path={'/app/MainApp'} component={ () => Welcome(name)}/>
                    <Route path={'/app/NewForm'} component={ () => NewForm(myUser)}/>
                    <Route path={'/app/ActualForm'} component={ () => ActualForm(myUser)}/>
                    <Route path={'/app/HistoryForm'} component={ () => HistoryForm(myUser)}/>
                    <Route path={'/app/NewCardChoice'} component={ () => NewCardChoice(myUser)}/>
                    <Route path={'/app/ActualCardChoice'} component={ () => ActualCardChoice(myUser)}/>
                </section>
            </Switch>
        </Router>
    </>
    );
}

export default MainApp;