import React, {useState, useEffect} from 'react';
import LandingPageHeader from "../LandingPage/LandingPage_header"
import {Link} from "react-router-dom";
import {API_URL} from "../Fetch/fetch";
import {PAGE_URL} from "../Fetch/fetch";


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
            fetch(`${API_URL}/user?name=${name}&&password=${password}`, {
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
                    setUser(...data)
                    console.log(...data)
                })
                .catch(err => console.log(err))

        }
        setTimeout(()=> {arrayErrors.push("błędne hasło lub nazwa"); setError([...arrayErrors])},1500)

        setError([...arrayErrors])
    }

    return (
        <section className={"container"}>
            <LandingPageHeader/>
            <div className={"LogSign_all"}>
                <div className={"LogSign"}>
                    Log ins
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
                            <button className={"button_main"}>Loguj!</button>
                        {error.map((element, index) => {
                            return (<ul key={index}>
                                <li>{element}</li>
                            </ul>)
                        })}
                    </form>
                </div>
                <div className={"LogSign"}>
                    <Link to='/app/sign'>
                        <button className={"button_main"}>Zarejestruj się</button>
                    </Link>
                </div>

            </div>
            {/*<div>*/}
            {/*    <input type="text"*/}
            {/*           placeholder={"Tutaj wpisz jak masz na imię"}*/}
            {/*           value={input}*/}
            {/*           onChange={e => setInput(e.target.value)}*/}
            {/*    />*/}
            {/*</div>*/}
            {/*<div className={'instructions__add'}>*/}
            {/*    <textarea rows={'4'} type="text" value={instruction} onChange={handleChangeInstruction}/>*/}
            {/*    <i className="fas fa-plus-square" onClick={handleAddInstruction}/>*/}
            {/*</div>*/}
        </section>
    );
}

export default PageLog;