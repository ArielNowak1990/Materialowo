import React, {useState} from 'react';
import LandingPageHeader from "../LandingPage/LandingPage_header";
import {Link} from "react-router-dom";
import {addUser} from "../Fetch/fetch"


function PageSign() {
    const [name, setName] = useState([])
    const [mail, setMail] = useState([])
    const [password, setPassword] = useState([])
    const [passwordRepeat, setPasswordRepeat] = useState([])
    const [error, setError]= useState([])


    const handleSubmit = event => {
        event.preventDefault();
        let arrayErrors = [];
        if (name.length < 3) (arrayErrors.push("Imię jest zbyt krótkie"))
        if (mail.length < 5) (arrayErrors.push("Mail jest zbyt krótki"))
        if (mail.indexOf("@") < 0) (arrayErrors.push("Mail nie posiada znaku @"))
        if (password.length <5) (arrayErrors.push("hasło musi mieć min. 5 znaków"))
        if (password !== passwordRepeat) (arrayErrors.push("powtórzone hasło musi się zgadzać z hasłem"))
        if (arrayErrors.length === 0) (alert("Konto dodane. Możesz się zalogować"))
        if (arrayErrors.length === 0) {
            return (
            addUser(
                {
                    name: name,
                    password: password,
                    isLogged: "false",
                    initialized: "false",
                    userEmail: mail,
                    surname: "false",
                    firm: "false",
                    placeWork: "false",
                    logo: "false",
                    coworkers: "false"
                }
            )
        )
        }

        setError([...arrayErrors])
    }

    return (
        <section className={"container"}>
            <LandingPageHeader/>
            <div className={"LogSign_all"}>
                <div className={"LogSign"}>
                    <Link to='/app/log'>
                        <button className={"button_main"}>Zaloguj się</button>
                    </Link>
                </div>

                <div className={"LogSign"}>
                    Zarejestruj się:
                    <form onSubmit={handleSubmit}>
                        <div>

                            <input type="text"
                                   value={name}
                                   placeholder={"Tutaj wpisz jak masz na imię"}
                                   onChange={e => setName(e.target.value)}
                            />
                        </div>
                        <div>
                            <input type="password"
                                   value={password}
                                   placeholder={"Tutaj wpisz hasło"}
                                   onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                        <div>
                            <input type="password"
                                   value={passwordRepeat}
                                   placeholder={"Tutaj powtórz hasło"}
                                   onChange={e => setPasswordRepeat(e.target.value)}
                            />
                        </div>
                        <div>
                            <input type="text"
                                   value={mail}
                                   placeholder={"Tutaj wpisz maila"}
                                   onChange={e => setMail(e.target.value)}
                            />
                        </div>
                        <button className={"button_main"}>Rejestruj!</button>
                        {error.map( (element,index) => {return(<ul key={index}><li>{element}</li></ul>) })}
                    </form>
                </div>
            </div>
        </section>
    );
}

export default PageSign;