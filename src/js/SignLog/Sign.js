import React, {useState, useContext} from 'react';
import {Link} from "react-router-dom";
import FirebaseContext from "../firebase/context"
import {PAGE_URL} from "../Fetch/fetch";


function PageSign() {
    const [name, setName] = useState([])
    const [mail, setMail] = useState([])
    const [password, setPassword] = useState([])
    const [passwordRepeat, setPasswordRepeat] = useState([])
    const [error, setError]= useState([])

    const firebase = useContext(FirebaseContext)
    console.log(firebase)

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
            firebase
                .doCreateUserWithEmailAndPassword(mail, passwordRepeat)
                .then(authUser => {
                    //create a user in Firebase realtime database
                    return firebase
                        .user(authUser.user.uid)
                        .set({
                            email: mail
                        })
                })
                .then(
                    setMail(""),
                    setPassword(""),
                    setPasswordRepeat("")
                )
                .then(
                    window.location.href=`${PAGE_URL}/app/MainApp/${mail}`
                )
                .catch(error => {
                    console.log(error)
                })
        }
        setError([...arrayErrors])
    }

    return (
        <section className={"container"}>
            <div className={"LogSign_all2"}>
                <div className={"LogSign"}>
                    <Link to='/app/log'>
                        <button className={"button_main"}>Zaloguj się</button>
                    </Link>
                </div>
                <div className={"LogSign"}>
                   <h3>Zarejestruj się:</h3>
                    <form onSubmit={handleSubmit}>
                        <div>

                            <input type="text"
                                   value={name}
                                   placeholder={"Imię"}
                                   onChange={e => setName(e.target.value)}
                            />
                        </div>
                        <div>
                            <input type="password"
                                   value={password}
                                   placeholder={"Haslo"}
                                   onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                        <div>
                            <input type="password"
                                   value={passwordRepeat}
                                   placeholder={"Powtórz hasło"}
                                   onChange={e => setPasswordRepeat(e.target.value)}
                            />
                        </div>
                        <div>
                            <input type="text"
                                   value={mail}
                                   placeholder={"Mail"}
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