import React, {useState, useEffect} from 'react';
import LandingPageHeader from "../LandingPage/LandingPage_header"
import Welcome from "../App/Welcome";
import NewForm from "./NewForm";

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {API_URL} from "../Fetch/fetch";



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
                    <LandingPageHeader/>
                    <Route path={'/app/MainApp'} component={ () => Welcome(name)}/>
                    <Route path={'/app/NewForm'} component={ () => NewForm(myUser.id)}/>
                </section>
            </Switch>
        </Router>
    </>
    );
}

export default MainApp;