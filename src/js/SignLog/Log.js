import React, {useState, useContext} from 'react';
import {Link} from "react-router-dom";
import {API_URL} from "../Fetch/fetch";
import {PAGE_URL} from "../Fetch/fetch";
import FirebaseContext from "../firebase/context"
import {UserContext} from "../../App"


function PageLog() {
    let {dane, handleChange} = useContext(UserContext);

    const [email, setEmail] = useState([])
    const [password, setPassword] = useState([])
    const [error, setError] = useState([])
    const [user, setUser] = useState(false)
    const [firebaseError, setFirebaseError] = useState(false)
    const firebase = useContext(FirebaseContext)

    const handleSubmit = event => {
        event.preventDefault();
        let arrayErrors = [];
        const re = /\S+@\S+\.\S+/;
        let isValidate = true;
        if (re.test(email) !== true) {
            (arrayErrors.push("email jest zbyt krótkie"))
            isValidate = false
        }

        if (password.length < 6) {
            (arrayErrors.push("hasło musi mieć min. 6 znaków"))
            isValidate = false
        }
        setError([...arrayErrors])

        if (arrayErrors.length === 0) {
            fetch(`${API_URL}/user?userEmail=${email}`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(response => {
                    if (response.ok === false) {
                        throw new Error("błąd z pobraniem użytkownika")
                        isValidate = false
                    } else {
                        return response.json();
                    }
                })
                .then(data => {
                        setUser({...data[0]});
                    console.log({...data[0]})
                })
                .catch(err => {
                    console.log(err);
                    arrayErrors.push("błędne nazwa użytkownika");
                    isValidate = false
                    setError([...arrayErrors])
                })

            if (isValidate === false) return;

            firebase
                .doSignInWithEmailAndPassword(email, password)
                .then((authUser) => {
                    dane={...dane, userEmail: authUser}
                    window.location.href=`${PAGE_URL}/app/MainApp/${dane.userEmail.user.email}`

                })
                .catch(error => {
                    setFirebaseError({...error})
                })
        }
    }

    return (
        <section className={"container"}>
            <div className={"LogSign_all"}>
                <div className={"LogSign"}>
                    <h3>Logowanie</h3>
                    <form onSubmit={handleSubmit}>
                        <div>

                            <input type="text"
                                   value={email}
                                   placeholder={"email"}
                                   onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <input type="password"
                                   value={password}
                                   placeholder={"Haslo"}
                                   onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                            <button className={"button_main"}>Loguj!</button>
                        <ul>
                        {error.map((element, index) => {
                            return (
                                <li key={index}>{element}</li>
                            )
                        })}
                        </ul>
                        <ul className={"log_error"}>{firebaseError.message}</ul>
                    </form>
                </div>
                <div className={"LogSign white"}>
                    <Link to='/app/sign'>
                        <button className={"button_main"}>Zarejestruj się</button>
                    </Link>
                </div>

            </div>

        </section>
    );
}

export default PageLog;