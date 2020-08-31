import React, {useState, useEffect} from 'react';
import LandingPageHeader from "../LandingPage/LandingPage_header"
import {Link} from "react-router-dom";
import {API_URL} from "../Fetch/fetch";
import {PAGE_URL} from "../Fetch/fetch";
import  bcrypt from 'bcryptjs';

// console.log(bcrypt.compareSync('kubus1', "$2a$10$hJe0dJvzvYj/ghzp2LmWaOK4XSXTfVyAXknzKdPYQPFLPRZj4kg5a"));

function PageLog() {
    const [name, setName] = useState([])
    const [password, setPassword] = useState([])
    const [error, setError] = useState([])
    const [user, setUser] = useState(false)

    useEffect(()=>{
       if (user) (window.location.href=`${PAGE_URL}/app/MainApp/${user.id}`)
    },[user, error])


    const handleSubmit = event => {
        event.preventDefault();
        let arrayErrors = [];
        if (name.length < 3) (arrayErrors.push("Imię jest zbyt krótkie"))
        if (password.length < 5) (arrayErrors.push("hasło musi mieć min. 5 znaków"))
        setError([...arrayErrors])
        if (arrayErrors.length === 0) {
            fetch(`${API_URL}/user?name=${name}`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(response => {
                    if (response.ok === false) {
                        throw new Error("błąd")
                    } else {
                        return response.json();
                    }
                })
                .then(data => {
                    console.log(password);
                    console.log(data[0].password);
                    console.log(bcrypt.compareSync(password, data[0].password));
                    console.log(data[0]);
                    if(bcrypt.compareSync(password, data[0].password)){
                        setUser({...data[0]});
                    }else{
                        throw new Error("Wrong password")
                    }
                })
                .catch(err => {
                    console.log(err);
                    arrayErrors.push("błędne hasło lub nazwa");
                    setError([...arrayErrors])
                })
        }
    }

    return (
        <section className={"container"}>
            <LandingPageHeader/>
            <div className={"LogSign_all"}>
                <div className={"LogSign"}>
                    <h3>Logowanie</h3>
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
                            <button className={"button_main"}>Loguj!</button>
                        <ul>
                        {error.map((element, index) => {
                            return (
                                <li key={index}>{element}</li>
                            )
                        })}
                        </ul>
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